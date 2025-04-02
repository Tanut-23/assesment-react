import { useEffect, useState } from "react";
import axios from "axios";

export default function User({user}) {
console.log(user)

  return (
    <div className="pt-16 bg-[#e8e8e8] h-full">
      <table className="border border-gray-300 rounded-md shadow-md">
  <thead>
    <tr className="bg-gray-100">
      <th className="border border-gray-300 p-2 font-semibold">Name</th>
      <th className="border border-gray-300 p-2 font-semibold">Last Name</th>
      <th className="border border-gray-300 p-2 font-semibold">Position</th>
    </tr>
  </thead>
  <tbody>
    {user.map((item) => (
      <tr key={item.id} className="border border-gray-300 hover:bg-gray-50">
        <td className="border border-gray-300 p-2">{item.name}</td>
        <td className="border border-gray-300 p-2">{item.lastname}</td>
        <td className="border border-gray-300 p-2">{item.position}</td>
      </tr>
    ))}
  </tbody>
</table>
    </div>
  );
}
