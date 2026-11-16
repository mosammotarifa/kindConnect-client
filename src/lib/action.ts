import { Event, IJoined } from "@/type/type";

export const createEventForm = async (userData: Event, token: string) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/create-event`, {
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
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/create-event`);
  if (!res.ok) {
    throw new Error("failed to showEventData");
  }
  const data: Event[] = await res.json();
  return data;
};
export const getEventDataById = async (id: string, token: string) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/create-event/${id}`, {
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
export const getEventDataByEmail = async (
  email: string,
  token: string,
): Promise<Event[]> => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/create-event/organizer/${email}`,
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

export const BookingData = async (joinedUserData: IJoined, token: string) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/booking`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
      Authorization: `Bearer ${token}`,
    },
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
  token: string,
): Promise<boolean> => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/booking/check/${eventId}/${userId}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  );

  if (!res.ok) {
    throw new Error("Failed to check join status");
  }

  const data: { isJoined: boolean } = await res.json();
  return data.isJoined;
};

// UNDO JOIN
export const undoBooking = async (
  eventId: string,
  userId: string,
  token: string,
) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/booking/${eventId}/${userId}`,
    {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  );

  const data = await res.json();

  if (!res.ok) {
    throw new Error(data.message || "Failed to undo joining");
  }

  return data;
};

export const joinedUserData = async (userEmail: string, token: string) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/booking/${userEmail}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  if (!res.ok) {
    throw new Error("failed to get joined userData");
  }
  const data: IJoined[] = await res.json();
  return data;
};

export const editManageEventData = async (
  id: string,
  bookingDataEdit: Event,
  token: string,
) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/create-event/${id}`, {
    method: "PATCH",
    headers: {
      "content-type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(bookingDataEdit),
  });
  if (!res.ok) {
    throw new Error("failed to editMangeEvent Data");
  }
  const data = await res.json();
  return data;
};
export const deleteManageEventData = async (id: string, token:string) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/create-event/${id}`, {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  if (!res.ok) {
    throw new Error("failed to get deleteMangageEventData");
  }
  const data = await res.json();
  return data;
};
