"use client";

import { useState, useEffect } from "react";
import { bookings } from "../../../Data/reservation"; // Adjust path

interface TimeSlot {
  time: string;
  available: boolean;
}

interface Props {
  courtId: number;
  date: string | Date;
}

export default function TimePicker({ courtId, date }: Props) {
  const [startIndex, setStartIndex] = useState<number | null>(null);
  const [endIndex, setEndIndex] = useState<number | null>(null);
  const [times, setTimes] = useState<TimeSlot[]>([]);

  const formattedDate =
    typeof date === "string"
      ? date
      : date instanceof Date && !isNaN(date.getTime())
        ? date.toISOString().split("T")[0]
        : "";

  const getSlotsBetween = (start: string, end: string) => {
    const slots: string[] = [];
    let [h, m] = start.split(":").map(Number);
    const [endH, endM] = end.split(":").map(Number);

    while (h < endH || (h === endH && m < endM)) {
      slots.push(
        `${h.toString().padStart(2, "0")}:${m.toString().padStart(2, "0")}`,
      );
      m += 30;
      if (m >= 60) {
        m = 0;
        h += 1;
      }
    }
    return slots;
  };

  useEffect(() => {
    const allTimes: TimeSlot[] = [];
    const startHour = 7;
    const endHour = 23;

    const bookedSlots = bookings
      .filter((b) => b.courtId === courtId && b.date === formattedDate)
      .flatMap((b) => getSlotsBetween(b.startTime, b.endTime));

    for (let hour = startHour; hour <= endHour; hour++) {
      for (let min of [0, 30]) {
        const m = min === 0 ? "00" : min;
        const timeStr = `${hour.toString().padStart(2, "0")}:${m}`;
        allTimes.push({
          time: timeStr,
          available: !bookedSlots.includes(timeStr),
        });
      }
    }

    setTimes(allTimes);
    setStartIndex(null);
    setEndIndex(null);
  }, [courtId, formattedDate]);

  const handleClick = (index: number) => {
    if (!times[index].available) return;

    if (startIndex === null) {
      setStartIndex(index);
      setEndIndex(index);
    } else if (startIndex !== null && endIndex !== null) {
      if (index < startIndex) {
        for (let i = index; i <= endIndex; i++) {
          if (!times[i].available) return;
        }
        setStartIndex(index);
      } else if (index > endIndex) {
        for (let i = startIndex; i <= index; i++) {
          if (!times[i].available) return;
        }
        setEndIndex(index);
      } else if (index === startIndex) {
        if (startIndex === endIndex) {
          setStartIndex(null);
          setEndIndex(null);
        } else {
          setStartIndex(startIndex + 1);
        }
      } else if (index === endIndex) {
        setEndIndex(endIndex - 1);
        if (endIndex - 1 < startIndex) {
          setStartIndex(null);
          setEndIndex(null);
        }
      } else if (index > startIndex && index < endIndex) {
        setStartIndex(null);
        setEndIndex(null);
      }
    }
  };

  const isSelected = (index: number) => {
    if (startIndex === null || endIndex === null) return false;
    return index >= startIndex && index <= endIndex;
  };

  return (
    <div className="rounded-sm h-100 w-70 p-3 overflow-y-auto scrollbar-hide">
      <style jsx>{`
        div::-webkit-scrollbar {
          display: none;
        }
      `}</style>

      {times.map((slot, index) => (
        <div
          key={slot.time}
          onClick={() => handleClick(index)}
          className={`border rounded-full h-10 w-60 mx-auto flex items-center justify-between px-4 mb-2 cursor-pointer ${
            slot.available
              ? "bg-white border-black  "
              : "border-gray-300 text-gray-200 cursor-not-allowed "
          }`}
        >
          <div
            className={`h-5 w-5 rounded-full transition-all duration-300 ease-in-out ${
              isSelected(index) ? "bg-blue-400 scale-110" : ""
            }`}
          ></div>

          <p
            className={`font-medium ${
              slot.available ? "text-black" : "text-gray-200"
            }`}
          >
            {`${parseInt(slot.time.split(":")[0]) % 12 || 12}:${
              slot.time.split(":")[1]
            } ${parseInt(slot.time.split(":")[0]) < 12 ? "AM" : "PM"}`}
          </p>

          <div className="h-5 w-5"></div>
        </div>
      ))}
    </div>
  );
}
