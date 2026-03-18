"use client";

import Link from "next/link";
import { useState } from "react";
import { DatePickerDemo } from "../../components/Shadcn/datePicker";
import { ROUTES } from "../../src/constant/routes";
import { useRouter } from "next/navigation";

export default function Schedule() {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined);
  const router = useRouter();
  return (
    <div className="p-10 bg-gray-50 flex flex-col gap-6 bg-white font-sans">
      <div className="flex flex-col md:flex-row gap-5 items-center">
        <div className="flex items-center gap-2">
          <Link className="flex gap-2" href={ROUTES.COURTS}>
            <h1 className="text-1xl text-gray-300 font-md font-sans">Courts</h1>
          </Link>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="h-5 w-5 text-gray-400 cursor-pointer"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 19.5L8.25 12l7.5-7.5"
            />
          </svg>
        </div>

        <h1 className="text-1xl font-semibold font-sans">Schedule</h1>
      </div>

      <div className="flex justify-center gap-10">
        <div className="flex flex-col md:flex-row gap-10">
          <div>
            <div className="h-120 w-120">
              <DatePickerDemo
                selected={selectedDate || new Date()}
                onSelect={setSelectedDate}
              />
              <p className="text-center mt-3 text-gray-400 font-light">
                Select your date.
              </p>
            </div>

            {/* Back button */}
            <div className="mt-4">
              <button
                onClick={() => router.push(ROUTES.TIME(1))}
                className="bg-gray-200 h-10 w-32 rounded-md flex justify-center items-center cursor-pointer"
              >
                <p className="font-sans text-gray-700 text-sm">Next</p>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
