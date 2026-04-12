"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { getToken } from "@/app/lib/auth";

export default function HomePage() {
  const router = useRouter();

  useEffect(() => {
    const token = getToken();

    if (!token) {
      router.push("/login");
    }
  }, [router]);

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold">Home Dashboard 🏠</h1>
      <p>Welcome! You are logged in.</p>
    </div>
  );
}
