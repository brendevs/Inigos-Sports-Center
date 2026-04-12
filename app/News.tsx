"use client";
import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { ROUTES } from "./src/constant/routes";

export default function News() {
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="flex flex-col w-full gap-4 bg-white p-4 md:p-8 shadow-lg items-center sticky top-0 z-50 border-b">
      <h1> LETS GO!!!!</h1>
    </div>
  );
}
