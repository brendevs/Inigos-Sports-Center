"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import HistoryCard from "@/app/components/historyCard";
import { getToken } from "@/app/lib/auth";

export default function Booking() {
  const router = useRouter();

  useEffect(() => {
    const token = getToken();

    if (!token) {
      router.push("/login");
    }
  }, [router]);

  return (
    <div className="min-h-screen bg-white px-4 m-4 py-6">
      <h1 className="text-md font-bold text-gray-800 mb-6">Bookings</h1>

      <div className="flex flex-col gap-4">
        <HistoryCard />
        <HistoryCard />
        <HistoryCard />
      </div>
    </div>
  );
}
