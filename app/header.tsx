"use client";
import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { ROUTES } from "./src/constant/routes";

export default function Header() {
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
      <div className="flex justify-between items-center w-full">
        {/* Logo */}
        <p
          style={{ fontFamily: "Satisfy" }}
          className="text-xl md:text-2xl text-orange-600"
        >
          Iñigos
        </p>

        {/* Nav */}
        <div className="flex gap-4 md:gap-10 items-center text-xs md:text-base">
          {/* COURT */}
          <Link href={ROUTES.COURTS}>
            <div className="flex gap-1 md:gap-2 text-gray-500 cursor-pointer hover:text-black items-center transition">
              <svg width="20" height="20" className="md:w-6 md:h-6">
                <path d="M15.716 1.329a1.341 1.341 0 0 1 2.109 1.55L15.147 9h4.161c1.623 0 2.372 2.016 1.143 3.075L8.102 22.721a1.148 1.148 0 0 1-1.81-1.317L8.996 15H4.674c-1.619 0-2.37-2.008-1.148-3.07l12.19-10.6Zm.452 1.595L4.51 13.061a.25.25 0 0 0 .164.439h5.45a.749.749 0 0 1 .692 1.041l-2.559 6.066 11.215-9.668a.25.25 0 0 0-.164-.439H14a.75.75 0 0 1-.687-1.05Z"></path>
              </svg>
              <p>COURT</p>
            </div>
          </Link>

          {/* BOOKINGS */}
          <Link href={ROUTES.BOOKINGS}>
            <div className="flex gap-1 md:gap-3 text-gray-500 cursor-pointer hover:text-black items-center transition">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="Black"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z"
                />
              </svg>

              <p>BOOKINGS</p>
            </div>
          </Link>
        </div>

        {/* Avatar */}
        <div className="relative" ref={menuRef}>
          <button
            onClick={() => setOpen(!open)}
            className="w-8 h-8 md:w-10 md:h-10 bg-gray-300 rounded-full 
                       focus:outline-none active:scale-95 transition"
          />

          {/* Dropdown */}
          <div
            className={`absolute right-0 mt-2 w-40 bg-white border rounded-lg shadow-lg py-2
              transform transition-all duration-200 origin-top-right
              ${open ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none"}
            `}
          >
            <button className="w-full text-left px-4 py-2 hover:bg-gray-100">
              Profile
            </button>

            <button className="w-full text-left px-4 py-2 text-red-500 hover:bg-gray-100">
              Logout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
