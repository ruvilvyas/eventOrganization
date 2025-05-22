// src/types/index.ts or src/types/EventType.ts
export interface EventType {
  _id: string;
  image: string;
  title: string;
  dateTime: string;
  organizer: string;
  category: string;
  slug: string;
  price: string;
  ticketsAvailable: number;
}
