"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import { ROUTES } from "../../../../src/constant/routes";
import { useState, useRef, useEffect } from "react";

export default function Available() {
  const params = useParams();
  const id = Number(params.id);

  const [openModal, setOpenModal] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);

  // Close modal when clicking outside
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
        setOpenModal(false);
      }
    }

    if (openModal) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [openModal]);

  return (
    <div className="p-10 bg-white flex flex-col gap-6 font-sans">
      <div>
        {/* Header */}
        <div className="flex flex-col md:flex-row gap-5 items-center">
          <div className="flex items-center gap-2">
            <Link
              className="text-1xl text-gray-300 font-md font-sans"
              href={ROUTES.TIME(id)}
            >
              Schedule
            </Link>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="h-5 w-5 text-gray-400"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 19.5L8.25 12l7.5-7.5"
              />
            </svg>
          </div>

          <h1 className="text-1xl font-semibold">Available</h1>
        </div>

        {/* Card */}
        <div className="flex justify-center items-center mt-5">
          <div
            className="flex h-100 w-65 rounded-3xl bg-cover relative justify-center"
            style={{
              backgroundImage:
                "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmRD6NwysCRmggetUCba_FEiKvKNhth8Wb9w&s')",
            }}
          >
            <div className="absolute inset-0 rounded-md"></div>

            <div className="relative w-65 h-100 rounded-3xl text-gray-500 text-sm shadow-xl overflow-hidden">
              <div className="h-[50%]"></div>

              <div className="h-[50%] bg-gray-500/10 backdrop-blur-sm">
                <p className="text-white font-bold text-md mt-4 mx-4">
                  COURT 1
                </p>

                <div className="flex-col mx-4 mt-4">
                  <p className="text-white font-thin text-xs">
                    This court is located at the main ground. Available at 3:00
                    PM - 5:00 PM.
                  </p>

                  <div className="flex gap-1 mt-4">
                    <div className="flex bg-gray-800/20 h-6 w-14 rounded-xl text-xs justify-center text-gray-100 gap-1 p-1">
                      <p>₱</p>
                      <p>200</p>
                    </div>
                    <p className="text-xs mt-1 text-gray-100">per hour</p>
                  </div>

                  {/* Reserve Button */}
                  <div
                    onClick={() => setOpenModal(true)}
                    className="bg-white h-8 rounded-2xl shadow-xl mt-6 cursor-pointer flex justify-center items-center hover:bg-gray-100 transition"
                  >
                    <p className="font-semibold text-gray-900 text-xs">
                      Reserve Now
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <p className="text-center mt-3 text-gray-400 font-light">
          Select Available Court.
        </p>
      </div>

      {/* Modal */}
      {openModal && (
        <div className="fixed inset-0 bg-black/40 flex justify-center items-center z-50">
          <div
            ref={modalRef}
            className={`bg-white w-80 rounded-2xl p-6 shadow-xl transform transition-all duration-200
              ${openModal ? "scale-100 opacity-100" : "scale-95 opacity-0"}
            `}
          >
            <h2 className="text-lg font-semibold mb-4">Payment</h2>

            <p className="text-sm text-gray-500 mb-4">
              Proceed with your payment for this court reservation.
            </p>

            {/* Payment Options */}
            <div className="flex flex-col gap-2">
              <button className="bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition">
                Pay with GCash
              </button>
              <button className="bg-green-500 text-white py-2 rounded-lg hover:bg-green-600 transition">
                Pay with Card
              </button>
            </div>

            {/* Actions */}
            <div className="flex justify-end gap-2 mt-4">
              <button
                onClick={() => setOpenModal(false)}
                className="text-gray-500"
              >
                Cancel
              </button>
              <button
                onClick={() => {
                  alert("Payment processing...");
                  setOpenModal(false);
                }}
                className="bg-black text-white px-3 py-1 rounded-md"
              >
                Confirm
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
