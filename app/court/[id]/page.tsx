import { DatePickerDemo } from "../../components/Shadcn/datePicker";

export default function Schedule() {
  return (
    <div className=" min-h-screen p-10 bg-gray-50 flex flex-col gap-6 bg-white font-sans">
      <div className="flex gap-5">
        <div className="flex items-center gap-2">
          <h1 className="text-1xl text-gray-300 font-md font-sans">Courts</h1>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="size-3 text-gray-400"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="m8.25 4.5 7.5 7.5-7.5 7.5"
            />
          </svg>
        </div>

        <h1 className="text-1xl font-semibold font-sans">Schedule</h1>
      </div>
      <div className="flex gap-10">
        <div>
          <div className="h-120 w-120">
            <DatePickerDemo />
            <p className="text-center mt-3 text-gray-400 font-light">
              Select your date.
            </p>
          </div>
        </div>
        <div>
          <div className="border-1 rounded-md  h-114 w-120 bg-gray-100"></div>
          <p className="text-center mt-3 text-gray-400 font-light">
            Select Available time.
          </p>
        </div>
        <div>
          <div className="flex w-100 h-115  rounded-md  ">
            <div
              className="flex-row w-full h-20 rounded-md flex-start p-2  text-gray-500 text-sm shadow-md
          "
            >
              <div className="h-16 w-16 bg-gray-300 rounded-md"></div>
            </div>
          </div>
          <p className="text-center mt-3 text-gray-400 font-light">
            Select Available Court.
          </p>
        </div>
      </div>
    </div>
  );
}
