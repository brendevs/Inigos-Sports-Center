export default function CourtCard() {
  return (
    <div className="flex justify-center items-center mt-5">
      <div
        className="flex h-80 w-60 rounded-3xl bg-cover relative justify-center"
        style={{
          backgroundImage:
            "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmRD6NwysCRmggetUCba_FEiKvKNhth8Wb9w&s')",
        }}
      >
        <div className="absolute inset-0 rounded-md"></div>

        <div className="relative w-60 h-80 rounded-3xl text-gray-500 text-sm shadow-xl overflow-hidden">
          <div className="h-[50%]"></div>

          <div className="h-[50%] bg-black/10 backdrop-blur-sm shadow-[-10px_0px_10px_-15px_rgba(0,0,0,0.1)]">
            <div>
              <p className="text-white font-bold text-md mt-4 mx-4 h-[20%]">
                COURT 1
              </p>

              <div className="flex-col mx-4 h-[80%] mt-1">
                <div className="h-[78px]">
                  <p className="text-white font-thin text-xs">
                    This court is located at the main ground This court will be
                    available at 3:00 PM - 5:00 PM
                  </p>

                  <div className="flex gap-1">
                    <div className="flex border h-4 w-12 rounded-xl text-xs justify-center text-white mt-2 gap-1">
                      <p className="font-bold">₱</p>
                      <p>200</p>
                    </div>
                    <p className="text-xs mt-2 text-gray-100">per hour</p>
                  </div>
                </div>

                <div className="bg-white border h-8 rounded-2xl shadow-xl">
                  <p className="font-semibold text-gray-900 text-center mt-2 text-xs">
                    Reserve Now
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
