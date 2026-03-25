"use client";

type Slot = {
  time: string;
  available: boolean;
};

// static sample data (UI only)
const slots: Slot[] = [
  { time: "07:00", available: true },
  { time: "07:30", available: false },
  { time: "08:00", available: true },
  { time: "08:30", available: true },
  { time: "09:00", available: false },
  { time: "09:30", available: true },
  { time: "10:00", available: true },
  { time: "10:30", available: false },
  { time: "11:00", available: true },
  { time: "11:30", available: true },
  { time: "12:00", available: false },
  { time: "12:30", available: true },
  { time: "13:00", available: true },
  { time: "13:30", available: false },
  { time: "14:00", available: true },
  { time: "14:30", available: true },
  { time: "15:00", available: false },
  { time: "15:30", available: true },
  { time: "16:00", available: true },
  { time: "16:30", available: false },
  { time: "17:00", available: true },
  { time: "17:30", available: true },
  { time: "18:00", available: false },
  { time: "18:30", available: true },
  { time: "19:00", available: true },
  { time: "19:30", available: false },
  { time: "20:00", available: true },
  { time: "20:30", available: true },
  { time: "21:00", available: false },
  { time: "21:30", available: true },
  { time: "22:00", available: true },
];

export default function TimePickerUI() {
  return (
    <div className="p-4 w-72 h-77 overflow-y-auto border rounded-md">
      {slots.map((slot) => (
        <div
          key={slot.time}
          className={`p-2 mb-2 border rounded text-center ${
            slot.available ? "bg-white text-black" : "bg-gray-200 text-gray-400"
          }`}
        >
          {slot.time}
        </div>
      ))}
    </div>
  );
}
