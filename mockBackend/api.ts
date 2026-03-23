import { db } from "./db";
import type { Court, Booking } from "./types";

const delay = (ms = 200) => new Promise((res) => setTimeout(res, ms));

export const api = {
  getSports: async () => {
    await delay();
    return db.sports;
  },

  getBookingsBySportAndDate: async (
    sportId: number,
    date: string,
  ): Promise<Booking[]> => {
    await delay();

    const courts = db.courts.filter((c) => c.sportId === sportId);

    const courtIds = courts.map((c) => c.id);

    return db.bookings.filter(
      (b) => courtIds.includes(b.courtId) && b.date === date,
    );
  },
};
