import Link from "next/link";

export default function Header() {
  return (
    <div className="flex flex-col h-25 w-full gap-4 rounded-lg bg-white p-8 shadow-lg items-center">
      <div className="flex justify-between items-center w-full">
        <div>
          <p style={{ fontFamily: "Satisfy" }} className="text-2xl text-black">
            Iñigos
          </p>
        </div>

        <div className="flex gap-10">
          <Link href="/court">
            <div className="flex gap-2 text-gray-500 cursor-pointer hover:text-black">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="24"
                height="24"
              >
                <path d="M15.716 1.329a1.341 1.341 0 0 1 2.109 1.55L15.147 9h4.161c1.623 0 2.372 2.016 1.143 3.075L8.102 22.721a1.148 1.148 0 0 1-1.81-1.317L8.996 15H4.674c-1.619 0-2.37-2.008-1.148-3.07l12.19-10.6Zm.452 1.595L4.51 13.061a.25.25 0 0 0 .164.439h5.45a.749.749 0 0 1 .692 1.041l-2.559 6.066 11.215-9.668a.25.25 0 0 0-.164-.439H14a.75.75 0 0 1-.687-1.05Z"></path>
              </svg>
              <p style={{ fontFamily: "system-ui" }}>COURT</p>
            </div>
          </Link>

          <Link href="/booking">
            <div className="flex text-gray-500 cursor-pointer hover:text-black">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="32"
                height="32"
              >
                <path d="M4.75 0a.75.75 0 0 1 .75.75V2h5V.75a.75.75 0 0 1 1.5 0V2h1.25c.966 0 1.75.784 1.75 1.75v10.5A1.75 1.75 0 0 1 13.25 16H2.75A1.75 1.75 0 0 1 1 14.25V3.75C1 2.784 1.784 2 2.75 2H4V.75A.75.75 0 0 1 4.75 0ZM2.5 7.5v6.75c0 .138.112.25.25.25h10.5a.25.25 0 0 0 .25-.25V7.5Zm10.75-4H2.75a.25.25 0 0 0-.25.25V6h11V3.75a.25.25 0 0 0-.25-.25Z"></path>
              </svg>
              <p style={{ fontFamily: "system-ui" }}>BOOKINGS</p>
            </div>
          </Link>

          <Link href="/openPlay">
            <div className="flex cursor-pointer hover:text-black">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="35"
                height="35"
              >
                <path d="M2 5.5a3.5 3.5 0 1 1 5.898 2.549 5.508 5.508 0 0 1 3.034 4.084.75.75 0 1 1-1.482.235 4 4 0 0 0-7.9 0 .75.75 0 0 1-1.482-.236A5.507 5.507 0 0 1 3.102 8.05 3.493 3.493 0 0 1 2 5.5ZM11 4a3.001 3.001 0 0 1 2.22 5.018 5.01 5.01 0 0 1 2.56 3.012.749.749 0 0 1-.885.954.752.752 0 0 1-.549-.514 3.507 3.507 0 0 0-2.522-2.372.75.75 0 0 1-.574-.73v-.352a.75.75 0 0 1 .416-.672A1.5 1.5 0 0 0 11 5.5.75.75 0 0 1 11 4Zm-5.5-.5a2 2 0 1 0-.001 3.999A2 2 0 0 0 5.5 3.5Z"></path>
              </svg>
              <p
                style={{ fontFamily: "system-ui" }}
                className="flex text-gray-500"
              >
                OPEN PLAY
              </p>
            </div>
          </Link>
        </div>

        <div>
          <div className="w-10 h-10 bg-gray-300 rounded-full"></div>
        </div>
      </div>
    </div>
  );
}
