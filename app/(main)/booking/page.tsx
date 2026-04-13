"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "@/app/lib/firebase";
import HistoryCard from "@/app/components/historyCard";

export default function Booking() {
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (!user) {
        router.replace("/login");
      } else {
        setLoading(false);
      }
    });

    return () => unsubscribe();
  }, [router]);

  if (loading) return null; // or a loader

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
