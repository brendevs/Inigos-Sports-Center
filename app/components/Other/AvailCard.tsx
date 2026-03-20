export default function () {
  return (
    <div className="flex-col mx-4 h-[80%] mt-1 ">
      <div className=" h-19.5">
        <p className=" text-white font-thin text-xs  ">
          This court is located at the main ground This court will be available
          at 3:00 PM - 5:00 PM
        </p>
        <div className="flex gap-1">
          <div className="flex border-1 h-4 w-12 rounded-xl text-xs justify-center text-white mt-2 gap-1">
            <p className="font bold">₱</p>
            <p className="">200</p>
          </div>
          <p className="text-xs mt-2 text-gray-100">per hour</p>
        </div>
      </div>
      <div className="bg-white border-1 h-8  rounded-2xl shadow-xl">
        <p className="font-semibold text-gray-900 text-center mt-2 text-xs ">
          Reserve Now
        </p>
      </div>
    </div>
  );
}
