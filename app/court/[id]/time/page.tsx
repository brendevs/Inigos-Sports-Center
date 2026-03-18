"use client";
import { ROUTES } from "../../../src/constant/routes";
import { useRouter } from "next/navigation";
import TimePicker from "../../../components/Other/timePicker";

export default function Time() {
  const router = useRouter();

  return (
    <div className="p-10 bg-gray-50 flex flex-col gap-6 bg-white font-sans">
      <h1 className="text-1xl font-semibold font-sans">Time</h1>

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
