import { Court } from "../types/court";

interface Props {
  court: Court;
}

export default function CourtsCard({ court }: Props) {
  return (
    <div className="w-70 h-115 border-1 shadow-xl rounded-xl p-2">
      {/* Image */}
      <img
        src={court.image}
        alt={court.name}
        className="h-60 w-full border-1 rounded-md object-cover"
      />

      <p className="text-black font-sans font-bold mt-2">{court.name}</p>

      <div className="flex">
        <p className="font-sans text-gray-500 text-lg text-xs ">Price</p>
        <p className="font-sans text-gray-500 text-lg text-xs ">
          - {court.price}
        </p>
      </div>
      <div className="h-12">
        <p className="font-sans text-black text-lg text-xs text-black pt-4 ">
          {court.description}
        </p>
      </div>

      <div className="flex justify-center gap-2 mt-2">
        <div className="h-13 w-32 border-1 bg-gray-100 rounded-xl font-sans ">
          <div className="flex-col p-1.5 justify-center justify-items-center ">
            <p className="font-sans text-black text-xs text-gray-500 ">
              Available
            </p>
            <p className="font-sans text-green-500 font-bold text-s">
              {court.available}
            </p>
          </div>
        </div>
        <div className="h-13 w-32 border-1 bg-gray-100 rounded-xl font-sans ">
          <div className="flex-col p-1.5 justify-center justify-items-center ">
            <p className="font-sans text-black text-xs text-gray-500 ">Used</p>
            <p className="font-sans text-red-500 font-bold text-s">
              {court.used}
            </p>
          </div>
        </div>
      </div>

      <div className="mt-2 bg-black h-10 w-full rounded-md flex justify-center items-center">
        <p className="font-sans text-white text-lg text-xs text-black font-bold">
          Book Now
        </p>
      </div>
    </div>
  );
}
