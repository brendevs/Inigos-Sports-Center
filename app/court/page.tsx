import CourtCard from "../components/courtCard";
import { courts } from "../../Data/courts";

export default function CourtsPage() {
  return (
    <div className="min-h-screen p-6 bg-gray-50 flex flex-wrap gap-6 justify-center">
      {courts.map((court) => (
        <CourtCard key={court.id} court={court} />
      ))}
    </div>
  );
}
