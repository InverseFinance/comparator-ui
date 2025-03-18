"use client"

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function FuturisticTable({
  data,
  columns
}: {
  data: { symbol: string, apy: number, avg30d: number, avg60d: number, avg90d: number, image: string }[]
  columns: { key: string, label: string }[]
}) {
  const [sortConfig, setSortConfig] = useState({ key: "apy", direction: "desc" });

  const sortedData = [...data].sort((a, b) => {
    if (a[sortConfig.key] < b[sortConfig.key]) return sortConfig.direction === "asc" ? -1 : 1;
    if (a[sortConfig.key] > b[sortConfig.key]) return sortConfig.direction === "asc" ? 1 : -1;
    return 0;
  });

  const handleSort = (key) => {
    setSortConfig((prev) => ({
      key,
      direction: prev.key === key && prev.direction === "asc" ? "desc" : "asc",
    }));
  };

  return (
    <div className="w-full mt-10">
      <motion.div
        className="bg-gray-900/50 backdrop-blur-lg rounded-2xl p-4 shadow-xl border border-gray-800"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <table className="w-full text-left text-white">
          <thead>
            <tr className="text-gray-300">
              {columns.map((column) => (
                <th
                  key={column.key}
                  className="p-3 text-xl cursor-pointer hover:text-blue-400 transition"
                  onClick={() => handleSort(column.key)}
                >
                  {column.label} {sortConfig.key === column.key && (sortConfig.direction === "asc" ? "▲" : "▼")}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {sortedData.map((item, index) => (
              <motion.tr
                key={index}
                className="border-b border-gray-700 hover:bg-gray-800/50 transition"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: index * 0.1 }}
              >
                {columns.map((column) => (
                  <td className="p-3 font-extrabold text-xl" key={column.key}>
                    {
                      column.key === 'symbol' ?
                        <div className="flex items-center gap-2">
                          <Image className="rounded-full" src={item["image"]} alt={item['symbol']} width={30} height={30} />
                          <span className="text-lg">{item[column.key]}</span>
                        </div>
                        : item[column.key] ? `${item[column.key]?.toFixed(2)}%` : '-'
                    }
                  </td>
                ))}
              </motion.tr>
            ))}
          </tbody>
        </table>
      </motion.div>
    </div>
  );
}
