import { useState } from "react";

export default function Card({ title, subtitle, onClick }) {
  return (
    <div
      className="bg-white p-4 rounded-xl shadow hover:shadow-md hover:scale-[1.02] transition cursor-pointer"
      onClick={onClick}
    >
      <div className="font-semibold text-gray-800">{title}</div>
      <div className="text-sm text-gray-500">{subtitle}</div>
    </div>
  );
}