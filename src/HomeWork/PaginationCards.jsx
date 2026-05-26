import React, { useEffect, useState } from "react";
import axios from "axios";

const PaginationCards = () =>{

  const [employees, setEmployees] = useState([]);
  const [page, setPage] = useState(0);

  useEffect(() => {
    axios
      .get(`http://localhost:8080/getAll?page=${page}&size=4`)
      .then((res) => {
        setEmployees(res.data.content);
      });
  }, [page]);

  return (
  <div className="min-h-screen flex flex-col items-center">

    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
      {employees.map((emp) => (
        <div
          key={emp.id}
          className="bg-white shadow-lg rounded-lg p-4 border"
        >
          <h2 className="text-xl font-bold">{emp.name}</h2>

          <p>ID: {emp.id}</p>
          <p>City: {emp.city}</p>
          <p>Course: {emp.course}</p>
        </div>
      ))}
    </div>

    <div className="flex gap-4 mt-4">
      <button
        className="px-4 py-2 bg-gray-300 rounded"
        onClick={() => setPage(page - 1)}
      >
        Prev
      </button>

      <button
        className="px-4 py-2 bg-blue-500 text-white rounded"
        onClick={() => setPage(page + 1)}
      >
        Next
      </button>
    </div>

  </div>
);
}

export default PaginationCards;