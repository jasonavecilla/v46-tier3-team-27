import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { handlePageChange } from "../Features/Recipes/recipeSlice";

const PaginationContainer = () => {
  const [page, setPage] = useState(1);
  const siblingCount = 1;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(handlePageChange(page));
  }, [page]);
  const handleChange = (pageNumber) => {
    setPage(pageNumber);
  };
  const { pages: pageCount } = useSelector((store) => store.recipes);
  const pages = Array.from({ length: pageCount }, (_, index) => {
    return index + 1;
  });
  if (pageCount < 2) return null;
  console.log(page);

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
        {pages.map((pageNumber) => {
          // Left Number
          if (pageNumber < page && pageNumber >= page - siblingCount) {
            return (
              <button
                type="button"
                className={`btn btn-xs sm:btn-md join-item
            `}
                key={pageNumber}
                onClick={() => handleChange(pageNumber)}
              >
                {pageNumber}
              </button>
            );
          }
          // Left Dot
          if (
            pageNumber < page - siblingCount &&
            pageNumber > page - siblingCount - 3
          ) {
            return (
              <button
                type="button"
                className={`btn btn-xs sm:btn-md join-item
            `}
                key={pageNumber}
              >
                .
              </button>
            );
          }
          // Right Number
          if (pageNumber > page && pageNumber <= page + siblingCount) {
            return (
              <button
                type="button"
                className={`btn btn-xs sm:btn-md join-item 
            `}
                onClick={() => handleChange(pageNumber)}
                key={pageNumber}
              >
                {pageNumber}
              </button>
            );
          }
          //  Right Dot
          if (
            pageNumber > page + siblingCount &&
            pageNumber < page + siblingCount + 3
          ) {
            return (
              <button
                type="button"
                className={`btn btn-xs sm:btn-md join-item
          `}
                key={pageNumber}
              >
                .
              </button>
            );
          }
          // Current Page
          if (pageNumber === page) {
            return (
              <button
                onClick={() => handleChange(pageNumber)}
                type="button"
                className={`btn btn-xs sm:btn-md join-item bg-base-300
                `}
                key={pageNumber}
              >
                {pageNumber}
              </button>
            );
          }
        })}
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
