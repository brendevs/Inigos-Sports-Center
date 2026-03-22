export default function HistoryCard() {
  return (
    <div className="flex flex-col m-auto   px-4">
      <div className="flex justify-between">
        <p className=" m-4 text-gray-500 text-xs"> November 1, 2025 </p>
        <div></div>
      </div>

      <div
        className="flex flex-col md:flex-row w-full md:w-[80%] lg:w-[100%] 
          border-2 border-gray-100 shadow-md rounded-2xl md:rounded-full 
          justify-between p-3 md:p-0 flex-wrap md:flex-nowrap"
      >
        {/* Left */}
        <div className="flex gap-2 items-center p-1 flex-shrink-0">
          <div className="h-10 w-10 flex-shrink-0 rounded-full bg-gray-300 flex justify-center items-center"></div>

          <p className="text-sm font-sans font-bold text-black">
            Pickle Ball Court
          </p>
        </div>

        {/* Right */}
        <div
          className="flex flex-wrap md:flex-nowrap gap-3 md:gap-10 
            items-start md:items-center mt-2  ml-4 md:mt-0 text-xs text-gray-500"
        >
          <p>Game time: 1hr</p>

          <p>9:00pm - 10:00pm</p>

          <p>Jan 21, 2024</p>

          <div className="flex gap-2 items-center mr-4 flex-shrink-0">
            <p>paid</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              width="16"
              height="16"
              className="fill-green-500"
            >
              <path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8Zm1.5 0a6.5 6.5 0 1 0 13 0 6.5 6.5 0 0 0-13 0Zm10.28-1.72-4.5 4.5a.75.75 0 0 1-1.06 0l-2-2a.751.751 0 0 1 .018-1.042.751.751 0 0 1 1.042-.018l1.47 1.47 3.97-3.97a.751.751 0 0 1 1.042.018.751.751 0 0 1 .018 1.042Z"></path>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}
