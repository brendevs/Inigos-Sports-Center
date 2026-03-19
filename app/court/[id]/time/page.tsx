"use client";
import { ROUTES } from "../../../src/constant/routes";
import { useRouter } from "next/navigation";
import TimePicker from "../../../components/Other/timePicker";
import { Link } from "lucide-react";

export default function Time() {
  const router = useRouter();

  return (
    <div className="p-10 bg-gray-50 flex flex-col gap-6 bg-white font-sans">
      <div className="flex flex-col md:flex-row gap-5 items-center">
        <div className="flex items-center gap-2">
          <div className="flex gap-2">
            <h1 className="text-1xl text-gray-300 font-md font-sans">Courts</h1>
          </div>
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

        <div className="flex items-center gap-2">
          <div className="flex gap-2">
            <h1 className="text-1xl text-gray-300 font-md font-sans">
              Schedule
            </h1>
          </div>
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
        <h1 className="text-1xl font-semibold font-sans">Time</h1>
      </div>

      <div className="flex justify-center gap-10">
        <div className="flex-col justify-center">
          <TimePicker courtId={1} date={new Date()} />
        </div>
      </div>
      <div className="mt-4">
        <button
          onClick={() => router.push(ROUTES.AVAILABLE(1))}
          className="bg-gray-200 h-10 w-32 rounded-md flex justify-center items-center cursor-pointer"
        >
          <p className="font-sans text-gray-700 text-sm">Next</p>
        </button>
      </div>
    </div>
  );
}
