import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

export default function AddTransaction() {
  const [value, onChange] = useState(new Date());

  return (
    <section>
      <div className="mt-6">
        New Transaction
        <div className="w-[90%] my-[1%] border-[1px] border-lightGray/30"></div>
      </div>
      <div className="font-semibold">Date</div>
      <Calendar onChange={onChange} value={value} locale="en-US" />
    </section>
  );
}
