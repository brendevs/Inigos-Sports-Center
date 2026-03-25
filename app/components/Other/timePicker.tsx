"use client";

type Slot = {
  time: string;
  available: boolean;
};

interface Props {
  blank?: boolean;
  selectedRange?: string[];
  onSelectRange?: (range: string[]) => void;
}

const slots: Slot[] = [
  { time: "07:00", available: true },
  { time: "07:30", available: true },
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

export default function TimePickerUI({
  blank = false,
  selectedRange = [],
  onSelectRange,
}: Props) {
  const handleClick = (index: number) => {
    if (!onSelectRange) return;

    const clicked = slots[index];

    // 🔥 restart if already selected
    if (selectedRange.length >= 2) {
      onSelectRange([clicked.time]);
      return;
    }

    // first click
    if (selectedRange.length === 0) {
      onSelectRange([clicked.time]);
      return;
    }

    // second click → build range
    const startIndex = slots.findIndex((s) => s.time === selectedRange[0]);

    const [min, max] =
      startIndex < index ? [startIndex, index] : [index, startIndex];

    const range = slots.slice(min, max + 1);

    // ❌ block unavailable
    if (range.some((s) => !s.available)) {
      alert("Cannot select unavailable slot");
      return;
    }

    onSelectRange(range.map((s) => s.time));
  };

  return (
    <div className="p-4 w-72 h-80 overflow-y-auto border rounded-md">
      {blank ? (
        <div className="flex items-center justify-center h-full ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 30 30"
            stroke-width="1.5"
            stroke="currentColor"
            className="size-6 mt-1 text-red-600"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z"
            />
          </svg>

          <p className="text-gray-500 text-sm">Select a date</p>
        </div>
      ) : (
        slots.map((slot, index) => {
          const isSelected = selectedRange.includes(slot.time);

          return (
            <div
              key={slot.time}
              onClick={() => {
                if (slot.available) handleClick(index);
              }}
              className={`p-2 mb-2 border rounded text-center transition
                ${
                  slot.available
                    ? "cursor-pointer bg-white"
                    : "bg-gray-200 text-gray-400 cursor-not-allowed"
                }
                ${
                  isSelected ? "bg-orange-500 text-black border-orange-600" : ""
                }
              `}
            >
              {slot.time}
            </div>
          );
        })
      )}
    </div>
  );
}
