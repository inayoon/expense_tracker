import React, { useState } from "react";
import { useSelector } from "react-redux";
import Header from "../components/Header";
import Transaction from "../components/Transaction";
import AddTransaction from "../components/AddTransaction";

export default function Home() {
  const filters = ["all", "income", "expenses"];
  const [filter, setFilter] = useState(filters[0]);
  const [showForm, setShowForm] = useState(false);
  const name = useSelector((state) => state.user?.userData.username);
  const handleModal = () => {
    setShowForm(!showForm);
  };
  return (
    <section className="flex flex-col justify-center mt-6 max-w-md mx-auto">
      <div className="p-6 bg-white rounded-md shadow-lg">
        <div className="flex flex-col max-w-[160px] mx-auto">
          <img src="../../public/wallet.png" alt="wallet" />
        </div>
        <div>
          <h2 className="mt-4 text-center text-gray-700  text-xl">
            Hello {name}!
          </h2>
          <p className="text-center text-gray-700">
            Review the spending history for the past month{" "}
          </p>
          <p>$3,700</p>
        </div>
        <Header filters={filters} filter={filter} onFilterChange={setFilter} />
        <Transaction filter={filter} onModalChange={handleModal} />
        {showForm && <AddTransaction onModalChange={handleModal} />}
      </div>
    </section>
  );
}
