import React from "react";
import { useForm } from "react-hook-form";

export default function Login() {
  return (
    <section className="flex flex-col justify-center mt-20 max-w-md m-auto">
      <div className="p-6 bg-white rounded-md shadow-lg">
        <h1 className="text-4xl font-bold text-center">Sign In</h1>
        <form className="mt-8">
          <div className="mb-2">
            <label
              htmlFor="username"
              className="text-sm font-semibold text-gray-800"
            >
              Username
            </label>
            <input
              type="text"
              id="username"
              className="w-full px-8 py-2 mt-2 bg-white rounded-md border-b-2 border-gray-300"
            />
          </div>

          <div className="mb-2">
            <label
              htmlFor="email"
              className="text-sm font-semibold text-gray-800"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-8 py-2 mt-2 bg-white rounded-md border-b-2 border-gray-300"
            />
          </div>
          <div className="mb-2">
            <label
              htmlFor="password"
              className="text-sm font-semibold text-gray-800"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              className="w-full px-8 py-2 mt-2 bg-white rounded-md border-b-2 border-gray-300"
            />
          </div>
          <div className="mt-6 flex justify-center">
            <button className="w-2/3 bg-amber-400 text-gray-800 font-semibold px-4 py-3 rounded-md hover:bg-amber-500">
              Sign In
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
