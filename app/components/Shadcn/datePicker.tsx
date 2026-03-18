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
      className="rounded-lg border h-auto w-auto"
      captionLayout="dropdown"
    />
  );
}
