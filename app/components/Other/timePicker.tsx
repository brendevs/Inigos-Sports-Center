"use client";

import { useEffect, useState } from "react";
import { api } from "../../../mockBackend/api";

type Slot = {
  time: string;
  available: boolean;
};

interface Props {
  sportId: number;
  date: string;
}

export default function TimePicker({ sportId, date }: Props) {
  const [slots, setSlots] = useState<Slot[]>([]);

  // 1. create all slots
  const createSlots = () => {
    const result: Slot[] = [];

    for (let h = 7; h <= 22; h++) {
      for (let m of [0, 30]) {
        result.push({
          time: `${h.toString().padStart(2, "0")}:${m === 0 ? "00" : "30"}`,
          available: true,
        });
      }
    }

    return result;
  };

  useEffect(() => {
    async function load() {
      const bookings = await api.getBookingsBySportAndDate(sportId, date);

      const bookedTimes: string[] = [];

      // convert bookings → time slots
      for (const b of bookings as any[]) {
        let [h, m] = b.startTime.split(":").map(Number);
        const [eh, em] = b.endTime.split(":").map(Number);

        while (h < eh || (h === eh && m < em)) {
          bookedTimes.push(
            `${h.toString().padStart(2, "0")}:${m.toString().padStart(2, "0")}`,
          );

          m += 30;
          if (m >= 60) {
            m = 0;
            h++;
          }
        }
      }

      const baseSlots = createSlots();

      const updated = baseSlots.map((slot) => ({
        ...slot,
        available: !bookedTimes.includes(slot.time),
      }));

      setSlots(updated);
    }

    load();
  }, [sportId, date]);

  return (
    <div className="p-4 w-72 h-96 overflow-y-auto border rounded">
      {slots.map((slot) => (
        <div
          key={slot.time}
          className={`p-2 mb-2 border rounded text-center ${
            slot.available ? "bg-white text-black" : "bg-gray-200 text-gray-400"
          }`}
        >
          {slot.time}
        </div>
      ))}
    </div>
  );
}
