import React, { useState } from "react";
import { BsPlusCircleDotted } from "react-icons/bs";
import AddTransaction from "./AddTransaction";

export default function Transaction({ filter }) {
  const [showForm, setShowForm] = useState(false);
  const handleModal = () => {
    setShowForm(!showForm);
  };
  return (
    <div>
      <div
        className="flex flex-col justify-center bg-slate-100 shadow-md rounded-md max-w-[300px] h-[90px] mx-auto mt-2 cursor-pointer"
        onClick={handleModal}
      >
        <div className="self-center text-4xl ">
          <BsPlusCircleDotted />
        </div>
        <div className="text-sm font-light text-center">
          Add your transaction
        </div>
      </div>
      {showForm && <AddTransaction />}
    </div>
  );
}
