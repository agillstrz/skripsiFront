import React from "react";

export default function LoadingTable({ count }) {
  return (
    <>
      <tr className=" text-center capitalize text-sm">
        {count.map((m) => (
          <td key={m} className="py-2 px-2">
            <div className="animate-pulse bg-gray-200 rounded h-5 w-full"></div>
          </td>
        ))}
      </tr>
    </>
  );
}
