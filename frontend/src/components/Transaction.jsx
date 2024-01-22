import React, { useState } from "react";
import { useSelector } from "react-redux";
import { BsPlusCircleDotted } from "react-icons/bs";
import AddTransaction from "./AddTransaction";
import moment from "moment";

export default function Transaction({ filter, onModalChange }) {
  const expenseData = useSelector((state) => state.expenses?.expenses);
  // console.log(expenseData);
  const handleAmount = (price, category) => {
    category === "Income" ? (price = `+$${price}`) : (price = `-$${price}`);
    return price;
  };
  return (
    <div>
      <div className="flex flex-col">
        <ul className="">
          {expenseData.map((data) => (
            <div
              className="bg-slate-50 w-[85%] h-14 shadow-md rounded-md my-3 mx-5 px-4"
              key={data.date}
            >
              <div className="text-sm text-gray-600 pt-1">
                {moment(data.date).format("YYYY-MMM-DD")}
              </div>
              <div className="flex justify-between">
                <div className="text-gray-800 text-md font-semibold">
                  {data.description}
                </div>
                <div
                  className={
                    data.category === "Income"
                      ? "text-green-500 font-semibold"
                      : "text-red-500 font-semibold"
                  }
                >
                  {handleAmount(data.amount, data.category)}
                </div>
              </div>
            </div>
          ))}
        </ul>
      </div>
      <div
        className="flex flex-col justify-center bg-slate-100 shadow-md rounded-md w-[85%] h-[90px] mt-4 mx-5 cursor-pointer"
        onClick={onModalChange}
      >
        <div className="self-center text-4xl">
          <BsPlusCircleDotted />
        </div>
        <div className="text-sm font-light text-center">
          Add your transaction
        </div>
      </div>
    </div>
  );
}
