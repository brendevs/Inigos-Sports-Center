export default function HistoryCard() {
  return (
    <div className="flex justify-center items-center">
      <div className="flex w-[50%] h-14 border-2 border-gray-100 shadow-md rounded-full justify-between    ">
        <div className="flex gap-2 ">
          <div className="h-10 w-10 rounded-full bg-gray-300 flex justify-center items-center m-1.5"></div>
          <p className="flex-col text-sm font-sans font-bold text-black p-4 ">
            Pickle Ball Court
          </p>
        </div>
        <div className="flex gap-10 items-center p-5 ">
          <div className="flex">
            <p className=" flex text-xs font-sans text-gray-500 ">
              Play time: 1hr
            </p>
          </div>

          <p className="flex-col text-xs font-sans text-gray-500  ">
            9:00pm - 10:00pm
          </p>
          <p className="flex-col text-xs font-sans text-gray-500  ">
            Jan 21, 2024
          </p>
          <div className="flex gap-2 items-center">
            <p className="text-xs font-sans text-gray-500">paid</p>
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
