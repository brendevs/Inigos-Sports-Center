// mockData.tsx
export interface Booking {
  courtId: number;
  date: string; // YYYY-MM-DD
  startTime: string; // e.g., "07:00"
  endTime: string; // e.g., "09:00"
}

export const bookings: Booking[] = [
  {
    courtId: 1,
    date: "2026-03-15",
    startTime: "07:00",
    endTime: "09:00",
  },
  {
    courtId: 1,
    date: "2026-03-15",
    startTime: "10:00",
    endTime: "10:30",
  },
  {
    courtId: 2,
    date: "2026-03-15",
    startTime: "08:00",
    endTime: "09:30",
  },
];
