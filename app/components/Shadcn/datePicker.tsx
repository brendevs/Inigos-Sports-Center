"use client";

import * as React from "react";
import { Calendar } from "@/components/ui/calendar";

interface DatePickerDemoProps {
  selected: Date;
  onSelect: (date: Date) => void;
}

export function DatePickerDemo({ selected, onSelect }: DatePickerDemoProps) {
  return (
    <Calendar
      mode="single"
      selected={selected}
      onSelect={(date) => {
        if (date) onSelect(date);
      }}
      className="rounded-lg border w-full max-w-[380px] scale-90 sm:scale-100 origin-top"
      classNames={{
        day: "h-8 w-8 text-xs sm:h-10 sm:w-10 sm:text-sm",
      }}
      captionLayout="dropdown"
    />
  );
}
