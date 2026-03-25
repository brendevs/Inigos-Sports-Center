"use client";

import Link from "next/link";
import { useState } from "react";
import { DatePickerDemo } from "../../components/Shadcn/datePicker";
import { ROUTES } from "../../src/constant/routes";
import { useRouter } from "next/navigation";
import TimePickerUI from "@/app/components/Other/timePicker";

export default function Schedule() {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined);
  const [selectedTime, setSelectedTime] = useState<string | undefined>(
    undefined,
  );
  const router = useRouter();

  return (
    <div className="flex flex-col min-h-screen bg-white font-sans">
      {/* Header */}
      <div className="p-5 md:p-10 flex flex-row items-center gap-3">
        <div className="flex gap-2 items-center">
          <Link className="flex gap-2" href={ROUTES.COURTS}>
            <h1 className="text-sm md:text-base text-gray-300 font-medium">
              Courts
            </h1>
          </Link>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="h-5 w-5 text-gray-400"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 19.5L8.25 12l7.5-7.5"
            />
          </svg>
        </div>

        <h1 className="text-sm md:text-base font-semibold">Schedule</h1>
      </div>

      {/* Main Content */}
      <div className="flex flex-col lg:flex-row flex-grow items-center lg:items-start justify-center gap-6 md:gap-10 px-5 md:px-10">
        {/* Left Section (Date Picker) */}
        <div className="flex flex-col items-center w-full max-w-sm">
          <div className="w-full">
            <DatePickerDemo
              selected={selectedDate || new Date()}
              onSelect={(date) => {
                setSelectedDate(date);
                setSelectedTime(undefined); // reset time when date changes
              }}
            />
          </div>

          <p className="text-center mt-3 text-gray-400 text-sm px-2">
            {selectedDate
              ? `on ${selectedDate.toLocaleDateString("en-US", {
                  weekday: "long",
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}`
              : "Please select your date."}
          </p>
        </div>

        {/* Right Section (Time Picker) */}
        <div className="w-full max-w-sm flex justify-center">
          {!selectedDate ? (
            <TimePickerUI blank />
          ) : (
            <TimePickerUI
              selectedTime={selectedTime}
              onSelectTime={setSelectedTime}
            />
          )}
        </div>
      </div>

      {/* Footer Apply Button */}
      <div className="sticky bottom-0 w-full bg-white p-5 md:p-5 border-t flex justify-center">
        <button
          onClick={() => router.push(ROUTES.AVAILABLE(1))}
          disabled={!selectedDate || !selectedTime} // requires both date & time
          className={`h-10 w-full max-w-sm rounded-md flex justify-center items-center shadow-md transition
            ${
              selectedDate && selectedTime
                ? "bg-orange-600 hover:bg-orange-700"
                : "bg-gray-300 cursor-not-allowed"
            }
          `}
        >
          <p className="text-white text-sm">Apply</p>
        </button>
      </div>
    </div>
  );
}
