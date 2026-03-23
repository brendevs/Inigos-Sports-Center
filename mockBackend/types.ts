export type Sport = {
  id: number;
  name: string;
  image: string;
  description: string;
};

export type Court = {
  id: number;
  sportId: number;
  name: string;
  price: number;
  image?: string;
  description?: string;
};

export type Booking = {
  id: string;
  courtId: number;
  date: string;
  startTime: string;
  endTime: string;
};
