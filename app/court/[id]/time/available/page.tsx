export default function Available() {
  return (
    <div className="p-10 bg-gray-50 flex flex-col gap-6 bg-white font-sans">
      <div className="flex-col">
        <div className="flex w-100 h-115 rounded-md">
          <div className="flex-row w-full h-20 rounded-md flex-start p-2 text-gray-500 text-sm shadow-md">
            <div className="h-16 w-16 bg-gray-300 rounded-md"></div>
          </div>
        </div>

        <p className="text-center mt-3 text-gray-400 font-light">
          Select Available Court.
        </p>

        {/* ✅ NEXT BUTTON */}
        <button className="mt-5 w-full bg-black text-white py-2 rounded-md hover:opacity-80">
          Next
        </button>
      </div>
    </div>
  );
}
