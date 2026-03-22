import Link from "next/link";
import { ROUTES } from "./src/constant/routes";

export default function Header() {
  return (
    <div className="flex flex-col w-full gap-4 bg-white p-4 md:p-8 shadow-lg items-center sticky top-0 z-50 border-b">
      <div className="flex justify-between items-center w-full">
        {/* Logo */}
        <div>
          <p
            style={{ fontFamily: "Satisfy" }}
            className="text-xl md:text-2xl text-orange-600"
          >
            Iñigos
          </p>
        </div>

        {/* Nav */}
        <div className="flex gap-4 md:gap-10 items-center text-xs md:text-base">
          <Link href={ROUTES.COURTS}>
            <div className="flex gap-1 md:gap-2 text-gray-500 cursor-pointer hover:text-black items-center">
              <svg width="20" height="20" className="md:w-6 md:h-6">
                <path d="M15.716 1.329a1.341 1.341 0 0 1 2.109 1.55L15.147 9h4.161c1.623 0 2.372 2.016 1.143 3.075L8.102 22.721a1.148 1.148 0 0 1-1.81-1.317L8.996 15H4.674c-1.619 0-2.37-2.008-1.148-3.07l12.19-10.6Zm.452 1.595L4.51 13.061a.25.25 0 0 0 .164.439h5.45a.749.749 0 0 1 .692 1.041l-2.559 6.066 11.215-9.668a.25.25 0 0 0-.164-.439H14a.75.75 0 0 1-.687-1.05Z"></path>
              </svg>
              <p>COURT</p>
            </div>
          </Link>

          <Link href={ROUTES.BOOKINGS}>
            <div className="flex text-gray-500 cursor-pointer hover:text-black items-center gap-1 md:gap-2">
              <svg width="24" height="24" className="md:w-8 md:h-8">
                <path d="M4.75 0a.75.75 0 0 1 .75.75V2h5V.75a.75.75 0 0 1 1.5 0V2h1.25c.966 0 1.75.784 1.75 1.75v10.5A1.75 1.75 0 0 1 13.25 16H2.75A1.75 1.75 0 0 1 1 14.25V3.75C1 2.784 1.784 2 2.75 2H4V.75A.75.75 0 0 1 4.75 0ZM2.5 7.5v6.75c0 .138.112.25.25.25h10.5a.25.25 0 0 0 .25-.25V7.5Zm10.75-4H2.75a.25.25 0 0 0-.25.25V6h11V3.75a.25.25 0 0 0-.25-.25Z"></path>
              </svg>
              <p>BOOKINGS</p>
            </div>
          </Link>
        </div>

        {/* Avatar */}
        <div>
          <div className="w-8 h-8 md:w-10 md:h-10 bg-gray-300 rounded-full"></div>
        </div>
      </div>
    </div>
  );
}
