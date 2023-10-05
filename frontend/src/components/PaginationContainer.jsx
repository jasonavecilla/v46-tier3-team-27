import React, { useState } from "react";
import { useRouteLoaderData } from "react-router";

const PaginationContainer = () => {
  const pageCount = 20;
  const [page, setPage] = useState(1);
  const handleChange = (pageNumber) => {
    setPage(pageNumber);
  };

  const pages = Array.from({ length: pageCount }, (_, index) => {
    return index + 1;
  });
  if (pageCount < 2) return null;
  return (
    <div className="flex justify-end mt-16">
      <div className="join">
        <button
          type="button"
          className="btn btn-xs sm:btn-md join-item"
          onClick={() => {
            const prevPage = page - 1 === 0 ? pageCount : page - 1;
            setPage(prevPage);
          }}
        >
          Prev
        </button>
        {pages.map((pageNumber) => (
          <button
            onClick={() => handleChange(pageNumber)}
            type="button"
            className={`btn btn-xs sm:btn-md join-item ${
              page === pageNumber ? "bg-base-300" : ""
            }`}
            key={pageNumber}
          >
            {pageNumber}
          </button>
        ))}
        <button
          type="button"
          className="border-none btn btn-xs sm:btn-md join-item"
          onClick={() => {
            const nextPage = page + 1 > pageCount ? 1 : page + 1;
            setPage(nextPage);
          }}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default PaginationContainer;
