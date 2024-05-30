"use client";
import Cookies from "js-cookie";
import { useEffect, useState } from "react";
import axios from "axios";
import React from "react";
import { useRouter } from "next/navigation";

interface TableData {
  type: string;
  location: string;
  rental: string;
  ipcount: string;
  purpose: string;
  date: string;
}

const Table: React.FC = () => {
  const [tableData, setTableData] = useState<TableData[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const router = useRouter();
  useEffect(() => {
    const token = Cookies.get("token");
    if (token) {
      fetchTableData(token);
    }
  }, []);

  const fetchTableData = async (token: string) => {
    try {
      const response = await axios.get(
        "https://recruitment-api.vercel.app/get-table",
        {
          headers: {
            Authorization: `${token}`,
          },
        }
      );
      setTableData(response.data.data);
    } catch (error) {
      if(error.response.status == 400){
        Cookies.remove("token");
        router.push("/");
      }
    } finally {
      setLoading(false);
    }
  };
  const handleSelectClick = (index: number) => {
    const ipCount = tableData[index].ipcount;
    console.log(`Number of IP: ${ipCount}`);
  };
  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="flex flex-col  mx-auto w-10/12 lg:w-4/5 !mb-24 py-6 px-4 lg:px-6 justify-center bg-white rounded-lg overflow-x-auto">
      <h2 className="text-2xl pt-2 pb-4">Transaction History</h2>
      <table className="w-full">
        <thead>
          <tr>
            <th className="py-2 px-2 text-left">Type</th>
            <th className="py-2 px-2 text-left">Location</th>
            <th className="py-2 px-2 text-left">Rental Period</th>
            <th className="py-2  px-2 text-left">Number of IP</th>
            <th className="py-2 px-2 text-left">Spesific Purpose</th>
            <th className="py-2 px-2 text-left">Date</th>
            <th className="py-2 px-2 text-left">Actions</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((item, index) => (
            <tr key={index}>
              <td className="border-b px-2 py-2">{item.type}</td>
              <td className="border-b px-2 py-2">{item.location}</td>
              <td className="border-b px-2 py-2">{item.rental}</td>
              <td className="border-b px-2 py-2">{item.ipcount}</td>
              <td className="border-b px-2 py-2">{item.purpose}</td>
              <td className="border-b px-2 py-2">
                {new Date(item.date).toLocaleDateString("en-GB", {
                  day: "2-digit",
                  month: "short",
                  year: "numeric",
                })}
              </td>
              <td className="border-b px-2 py-2">
                {" "}
                <select
                  defaultValue="Actions"
                  onClick={(e) => handleSelectClick(index)}
                  className="border rounded px-2 py-1"
                >
                  <option value="Actions" disabled hidden>
                    Actions
                  </option>
                  <option value="Processing">Processing</option>
                  <option value="In Progress">In Progress</option>
                  <option value="Completed">Completed</option>
                </select>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
