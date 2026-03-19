export default function Available() {
  return (
    <div className="p-10 bg-white flex flex-col gap-6 font-sans ">
      <div>
        <div className="flex flex-col md:flex-row gap-5 items-center">
          <div className="flex items-center gap-2">
            <div className="flex gap-2">
              <h1 className="text-1xl text-gray-300 font-md font-sans">
                Courts
              </h1>
            </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="h-5 w-5 text-gray-400 cursor-pointer"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 19.5L8.25 12l7.5-7.5"
              />
            </svg>
          </div>

          <div className="flex items-center gap-2">
            <div className="flex gap-2">
              <h1 className="text-1xl text-gray-300 font-md font-sans">
                Schedule
              </h1>
            </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="h-5 w-5 text-gray-400 cursor-pointer"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 19.5L8.25 12l7.5-7.5"
              />
            </svg>
          </div>
          <h1 className="text-1xl font-semibold font-sans">Time</h1>
        </div>
        <div className="flex justify-center item-center mt-5">
          <div
            className="flex h-80  w-60 rounded-3xl bg-cover relative  justify-center "
            style={{
              backgroundImage:
                "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmRD6NwysCRmggetUCba_FEiKvKNhth8Wb9w&s')",
            }}
          >
            <div className="absolute inset-0  rounded-md"></div>

            <div className="relative w-60 h-80 rounded-3xl text-gray-500 text-sm shadow-xl overflow-hidden">
              <div className="h-[50%]"></div>

              <div className="h-[50%] bg-vlack/10 backdrop-blur-xs shadow-[-10_-0px_10px_-15px_rgba(0,0,0,0.1)] ">
                <div>
                  <p className=" text-white font-bold text-md mt-4 mx-4 h-[20%]">
                    COURT 1
                  </p>
                  <div className="flex-col mx-4 h-[80%] mt-1 ">
                    <div className=" h-19.5">
                      <p className=" text-white font-thin text-xs  ">
                        This court is located at the main ground This court will
                        be available at 3:00 PM - 5:00 PM
                      </p>
                      <div className="flex border-1 h-4 w-12 rounded-xl text-xs justify-center text-white mt-2 gap-1">
                        <p className="font bold">₱</p>
                        <p className=""> 200</p>
                      </div>
                    </div>
                    <div className="bg-white border-1 h-8  rounded-2xl shadow-xl">
                      <p className="font-semibold text-gray-900 text-center mt-2 text-xs ">
                        Reserve Now
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <p className="text-center mt-3 text-gray-400 font-light">
          Select Available Court.
        </p>

        <button className="mt-5 w-full bg-black text-white py-2 rounded-md hover:opacity-80">
          Next
        </button>
      </div>
    </div>
  );
}
