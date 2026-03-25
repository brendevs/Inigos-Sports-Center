import type { Sport } from "../../mockBackend/types";
import Link from "next/link";
import { ROUTES } from "../src/constant/routes";
interface Props {
  sport: Sport;
}

export default function SportCard({ sport }: Props) {
  return (
    <div className="w-70 h-115 border-1 shadow-xl rounded-xl p-2">
      {/* Image */}
      <img
        src={sport.image}
        alt={sport.name}
        className="h-60 w-full border-1 rounded-md object-cover shadow-md"
      />

      <p className="text-black font-sans font-bold mt-2">{sport.name}</p>

      <div className="h-15">
        <p className="font-sans text-black text-lg text-xs pt-4">
          {sport.description}
        </p>
      </div>

      <div className="flex gap-2 h-15 ">
        <div className="flex flex-col justify-center items-center w-[50%] bg-gray-100 rounded-md border">
          <p className="text-xs font-bold">Total Courts</p>
          <p className="text-green-400">0</p>
        </div>

        <div className="flex flex-col justify-center items-center w-[50%] bg-gray-100 rounded-md border">
          <p className="text-xs font-bold">Used</p>
          <p className="text-red-400">0</p>
        </div>
      </div>
      <Link href={ROUTES.SPORTS_DETAILS(sport.id)}>
        <div className="mt-2 bg-orange-600 h-10 w-full rounded-md flex justify-center items-center cursor-pointer transition-colors duration-400 hover:bg-black">
          <p className="font-sans text-white text-xs transition-colors duration-300 hover:text-black">
            Book Now
          </p>
        </div>
      </Link>
    </div>
  );
}
