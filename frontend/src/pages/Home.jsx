import React from "react";
import { useSelector } from "react-redux";

export default function Home() {
  const name = useSelector((state) => state.user?.userData.username);
  return (
    <section className="flex flex-col justify-center mt-20 max-w-md mx-auto">
      <div className="p-6 bg-white rounded-md shadow-lg">
        <div className="flex flex-col max-w-[200px] mx-auto">
          <img src="../../public/wallet.png" alt="wallet" />
        </div>
        <div>
          <h2 className="mt-4 text-center text-gray-700  text-xl">
            Hello {name}!
          </h2>
          <p className="text-center text-gray-700">
            Review the spending history for the past month{" "}
          </p>
        </div>
      </div>
    </section>
  );
}
