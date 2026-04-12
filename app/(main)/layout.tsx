"use client";

import Header from "../header";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { getToken } from "@/app/lib/auth";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();

  useEffect(() => {
    if (!getToken()) {
      router.replace("/login");
    }
  }, []);

  return (
    <>
      <Header />
      {children}
    </>
  );
}
