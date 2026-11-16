import { Event, IJoined } from "@/type/type";

export const createEventForm = async (userData: Event, token: string) => {
  const res = await fetch("http://localhost:5000/create-event", {
    method: "POST",
    headers: {
      "content-type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(userData),
  });
  if (!res.ok) {
    throw new Error(" failed to get data createEvent Form");
  }
  const data = await res.json();
  return data;
};
export const showEventData = async (): Promise<Event[]> => {
  const res = await fetch("http://localhost:5000/create-event");
  if (!res.ok) {
    throw new Error("failed to showEventData");
  }
  const data: Event[] = await res.json();
  return data;
};
export const getEventDataById = async (id: string, token: string) => {
  const res = await fetch(`http://localhost:5000/create-event/${id}`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  if (!res.ok) {
    throw new Error("failed to get event data by Id");
  }
  const data: Event = await res.json();
  return data;
};
export const getEventDataByEmail = async (email: string,token:string): Promise<Event[]> => {
  const res = await fetch(
    `http://localhost:5000/create-event/organizer/${email}`,
    {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  );
  if (!res.ok) {
    throw new Error("failed to get event data by email");
  }
  const data: Event[] = await res.json();
  return data;
};

export const BookingData = async (joinedUserData: IJoined) => {
  const res = await fetch("http://localhost:5000/booking", {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify(joinedUserData),
  });

  const data = await res.json();

  if (!res.ok) {
    throw new Error(data.message || "Failed to join event");
  }

  return data;
};

// CHECK JOIN STATUS
export const checkJoinedStatus = async (
  eventId: string,
  userId: string,
): Promise<boolean> => {
  const res = await fetch(
    `http://localhost:5000/booking/check/${eventId}/${userId}`,
  );

  if (!res.ok) {
    throw new Error("Failed to check join status");
  }

  const data: { isJoined: boolean } = await res.json();
  return data.isJoined;
};

// UNDO JOIN
export const undoBooking = async (eventId: string, userId: string) => {
  const res = await fetch(
    `http://localhost:5000/booking/${eventId}/${userId}`,
    {
      method: "DELETE",
    },
  );

  const data = await res.json();

  if (!res.ok) {
    throw new Error(data.message || "Failed to undo joining");
  }

  return data;
};

export const joinedUserData = async (userEmail: string) => {
  const res = await fetch(`http://localhost:5000/booking/${userEmail}`);
  if (!res.ok) {
    throw new Error("failed to get joined userData");
  }
  const data: IJoined[] = await res.json();
  return data;
};

export const editManageEventData = async (
  id: string,
  bookingDataEdit: Event,
) => {
  const res = await fetch(`http://localhost:5000/create-event/${id}`, {
    method: "PATCH",
    headers: { "content-type": "application/json" },
    body: JSON.stringify(bookingDataEdit),
  });
  if (!res.ok) {
    throw new Error("failed to editMangeEvent Data");
  }
  const data = await res.json();
  return data;
};
export const deleteManageEventData = async (id: string) => {
  const res = await fetch(`http://localhost:5000/create-event/${id}`, {
    method: "DELETE",
  });
  if (!res.ok) {
    throw new Error("failed to get deleteMangageEventData");
  }
  const data = await res.json();
  return data;
};
