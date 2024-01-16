import React, { useState } from "react";
import { IoCalendarNumber } from "react-icons/io5";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

export default function AddTransaction() {
  const [value, onChange] = useState(new Date());
  const [showCal, setShowCal] = useState(false);
  const [history, setHistory] = useState({});
  const handleCal = () => {
    setShowCal(!showCal);
  };

  return (
    <section>
      <div className="mt-6 ml-3">
        New Transaction
        <div className="w-[90%] my-[1%] border-[1px] border-lightGray/30"></div>
      </div>
      <form className="flex flex-col">
        <label className="font-semibold mt-2 ml-3 ">Date</label>
        <div className="flex items-center">
          {" "}
          {/* 수정: input과 span을 감싸는 부모 요소 */}
          <input
            className="bg-slate-100 w-[85%] h-10 shadow-md rounded-md my-3 ml-3"
            value={value}
          />
          <div
            className="relative right-8 text-xl font-bold"
            onClick={handleCal}
          >
            <IoCalendarNumber />
          </div>
        </div>
        <div className="w-[90%] ml-3">
          {showCal && (
            <Calendar onChange={onChange} value={value} locale="en-US" />
          )}
        </div>
        <label className="font-semibold mt-2 ml-3 ">Description</label>
        <div className="flex justify-center gap-4">
          <button className="bg-slate-100 w-1/2 h-10 shadow-md rounded-md my-3 font-light ml-3">
            Income
          </button>
          <button className="bg-slate-100 w-1/2 h-10 shadow-md rounded-md my-3 font-light mr-12">
            Expense
          </button>
        </div>
        <input
          className="bg-slate-100 w-[85%] h-10 shadow-md rounded-md my-3 ml-3 pl-2 mt-0"
          placeholder="Add the detail description"
        />
      </form>
    </section>
  );
}
