"use client";

import SportCard from "../components/sportCard";
import { api } from "../../mockBackend/api";
import { useEffect, useState } from "react";
import type { Sport } from "../../mockBackend/types";

export default function CourtsPage() {
  const [sports, setSports] = useState<Sport[]>([]);

  useEffect(() => {
    api.getSports().then(setSports);
  }, []);

  return (
    <div className="p-6 bg-gray-50">
      <h1 className="w-full text-lg font-bold text-gray-800 m-4 ml-4">
        Courts
      </h1>

      <div className="flex flex-wrap gap-6 justify-center">
        {sports.map((sport) => (
          <SportCard key={sport.id} sport={sport} />
        ))}
      </div>
    </div>
  );
}
