import { db } from "./db";
import type { Booking } from "./types";

const delay = (ms = 200) => new Promise((res) => setTimeout(res, ms));

export const api = {
  getSports: async () => {
    await delay();
    return db.sports;
  },

  getBookingsByCourtAndDate: async (
    courtId: number,
    date: string,
  ): Promise<Booking[]> => {
    await delay();

    return db.bookings.filter((b) => b.courtId === courtId && b.date === date);
  },
};
