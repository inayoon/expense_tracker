import React, { useState } from "react";
import { BsPlusCircleDotted } from "react-icons/bs";
import AddTransaction from "./AddTransaction";

export default function Transaction({ filter, onModalChange }) {
  return (
    <div>
      <div
        className="flex flex-col justify-center bg-slate-100 shadow-md rounded-md max-w-[280px] h-[90px] mt-4 mx-auto cursor-pointer"
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
