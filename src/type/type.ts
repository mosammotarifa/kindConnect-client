export interface Event {
  _id?: string;
  joinedCount?: number;
  title: string;
  category: string;
  description: string;
  image: string;
  date: string;
  time: string;
  location: string;
  capacity: number;
  organizerName: string;
  email: string;
}
export interface IJoined {
   _id?: string;
  eventId: string;
  eventName: string;
  time: string;
  location: string;
  date: string;
  userName: string;
  userEmail: string;
  userId: string;
}
