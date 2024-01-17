import React, { useState, useEffect } from "react";
import moment from "moment";
import { IoCalendarNumber } from "react-icons/io5";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "../index.css";

export default function AddTransaction({ onModalChange }) {
  const [value, onChange] = useState(new Date());
  const [showCal, setShowCal] = useState(true);
  const [history, setHistory] = useState({
    date: "",
    category: "",
    description: "",
    amount: "",
  });
  console.log(history);
  const handleCal = () => {
    setShowCal(!showCal);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const handleCategory = (type) => {
    setHistory({ ...history, category: type });
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setHistory((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const handleDateChange = (date) => {
    onChange(date);
    const formattedDate = moment(date).format("YYYY-MMM-DD");
    setHistory((prev) => ({
      ...prev,
      date: formattedDate,
    }));
  };
  useEffect(() => {
    handleCal();
  }, [value]);
  return (
    <section>
      <div className="mt-6 ml-3">
        New Transaction
        <div className="w-[90%] my-[1%] border-[1px] border-lightGray/30"></div>
      </div>
      <form className="flex flex-col" onSubmit={handleSubmit}>
        <label className="font-semibold mt-2 ml-3 ">Date</label>
        <div className="flex items-center">
          <input
            className="bg-slate-100 w-[85%] h-10 shadow-md rounded-md my-3 ml-3 px-2"
            defaultValue={moment(value).format("YYYY-MMM-DD")}
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
            <Calendar
              onChange={handleDateChange}
              value={value}
              locale="en-US"
              tileClassName="custom-calendar-tile"
            />
          )}
        </div>
        <label className="font-semibold mt-2 ml-3 ">Description</label>
        <div className="flex justify-center gap-4">
          <button
            className="bg-slate-100 w-1/2 h-10 shadow-md rounded-md my-3 font-light ml-3 cursor-pointer"
            onClick={() => handleCategory("Income")}
          >
            Income
          </button>

          <button
            className="bg-slate-100 w-1/2 h-10 shadow-md rounded-md my-3 font-light mr-12 cursor-pointer"
            onClick={() => handleCategory("Expense")}
          >
            Expense
          </button>
        </div>
        <input
          className="bg-slate-100 w-[85%] h-10 shadow-md rounded-md my-3 ml-3 px-3 mt-0"
          name="description"
          placeholder="Add the detail description"
          id="description"
          value={history.description}
          onChange={handleChange}
        />
        <label className="font-semibold mt-2 ml-3 ">Amount</label>
        <input
          className="bg-slate-100 w-[85%] h-10 shadow-md rounded-md my-3 ml-3 px-3"
          placeholder="Add the amount of money"
          name="amount"
          id="amount"
          value={history.amount}
          onChange={handleChange}
        />
        <button className="bg-yellow text-white w-[85%] h-12 shadow-md rounded-md my-3 ml-3 px-3 mt-2">
          Add the History
        </button>
        <button className="pr-5" onClick={onModalChange}>
          Close
        </button>
      </form>
    </section>
  );
}
