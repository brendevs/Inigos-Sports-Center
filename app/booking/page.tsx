import HistoryCard from "../components/historyCard";

export default function Booking() {
  return (
    <div className="min-h-screen bg-white px-4 m-4 py-6">
      <h1 className="text-md font-bold text-gray-800 mb-6">Bookings</h1>

      <div className="flex flex-col gap-4">
        <HistoryCard />
        <HistoryCard />
        <HistoryCard />
      </div>
    </div>
  );
}
