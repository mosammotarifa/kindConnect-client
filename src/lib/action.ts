import { Event, IJoined } from "@/type/type";

export const createEventForm = async (userData: Event) => {
  const res = await fetch("http://localhost:5000/create-event", {
    method: "POST",
    headers: { "content-type": "application/json" },
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
export const getEventDataById = async (id: string) => {
  const res = await fetch(`http://localhost:5000/create-event/${id}`);
  if (!res.ok) {
    throw new Error("failed to get event data by Id");
  }
  const data: Event = await res.json();
  return data;
};
export const getEventDataByEmail = async (
  email: string,
): Promise<Event[]> => {
  const res = await fetch(
    `http://localhost:5000/create-event/organizer/${email}`,
  );
  if (!res.ok) {
    throw new Error("failed to get event data by email");
  }
  const data: Event[] = await res.json();
  return data;
};
export const BookingData = async (joinedUserData: IJoined) => {
  const res = await fetch(`http://localhost:5000/booking`, {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify(joinedUserData),
  });
  if (!res.ok) {
    throw new Error("failed t sendbookig data");
  }
  const data: IJoined = await res.json();
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
 export const deleteManageEventData = async(id:string)=>{
  const res = await fetch(`http://localhost:5000/create-event/${id}`,{
    method:"DELETE"
  })
  if(!res.ok){
    throw new Error("failed to get deleteMangageEventData")
  }
  const data = await res .json()
  return data;
}