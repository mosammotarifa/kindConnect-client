export interface Event {
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
  eventName: string;
  time: string;
  location: string;
  date: string;
  userName: string;
  userEmail: string;
  userId: string;
}
