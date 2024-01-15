import React from "react";

export default function Header({ filters, filter, onFilterChange }) {
  return (
    <div className="">
      <ul className="flex gap-5 mt-6">
        {filters.map((value) => (
          <li key={value}>
            <button
              className={filter === value ? "font-semibold" : "font-light"}
              onClick={() => onFilterChange(value)}
            >
              {value}
            </button>
          </li>
        ))}
      </ul>
      <div className="w-[90%] my-[1%] border-[1px] border-lightGray/30"></div>
    </div>
  );
}
