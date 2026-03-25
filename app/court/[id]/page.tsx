"use client";

import Link from "next/link";
import { useState } from "react";
import { DatePickerDemo } from "../../components/Shadcn/datePicker";
import { ROUTES } from "../../src/constant/routes";
import { useRouter } from "next/navigation";
import TimePickerUI from "@/app/components/Other/timePicker";

export default function Schedule() {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined);
  const [selectedRange, setSelectedRange] = useState<string[]>([]);
  const router = useRouter();

  // 🔥 duration logic
  const totalMinutes = selectedRange.length * 30;
  const hours = Math.floor(totalMinutes / 60);
  const minutes = totalMinutes % 60;

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
            className="h-5 w-5 text-gray-600"
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

      {/* Main */}
      <div className="flex flex-col lg:flex-row flex-grow items-center lg:items-start justify-center gap-6 md:gap-10 px-5 md:px-10">
        {/* Date */}
        <div className="flex flex-col items-center w-auto max-w-sm">
          <DatePickerDemo
            selected={selectedDate || new Date()}
            onSelect={(date) => {
              setSelectedDate(date);
              setSelectedRange([]); // reset
            }}
          />

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

        {/* Time */}
        <div className="w-full max-w-sm flex flex-col items-center">
          {!selectedDate ? (
            <TimePickerUI blank />
          ) : (
            <>
              <TimePickerUI
                selectedRange={selectedRange}
                onSelectRange={setSelectedRange}
              />

              {/* 🔥 Booking Summary */}
              <div className=" w-full text-center">
                {selectedRange.length === 1 && (
                  <p className="text-sm text-gray-400 mt-3">
                    Select an end time
                  </p>
                )}

                {selectedRange.length >= 2 && (
                  <div className="p-3  ">
                    <p className="text-sm font-md text-gray-400">
                      {hours > 0 && `${hours} hr`}
                      {minutes > 0 && ` ${minutes} min`}
                    </p>
                  </div>
                )}
              </div>
            </>
          )}
        </div>
      </div>

      {/* Footer */}
      <div className="sticky bottom-0 w-full bg-white p-5 border-t flex justify-center">
        <button
          onClick={() => router.push(ROUTES.AVAILABLE(1))}
          disabled={!selectedDate || selectedRange.length < 2}
          className={`h-10 w-full max-w-sm rounded-md flex justify-center items-center shadow-md transition
            ${
              selectedDate && selectedRange.length >= 2
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
