import React from "react";
import { PropTypes } from "prop-types";

function SearchBar({ keyword, keywordChange }) {
  return (
    <>
      <div className="flex justify-center items-center mx-auto mt-5 rounded-lg bg-secondary w-[80%] md:w-1/3 h-20 md:h-20 shadow-large">
        <div className="w-3/4 flex">
          <input
            value={keyword}
            onChange={(event) => keywordChange(event.target.value)}
            type="text"
            id="search-navbar"
            className="w-full h-10 bg-quarternary text-primary rounded-l-3xl py-2 px-5 focus:outline-none"
            placeholder="Search"
          />
          <div className="flex items-center rounded-r-3xl bg-white px-2">
            <svg
              className="w-5 h-5 text-gray-500"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                clipRule="evenodd"
              ></path>
            </svg>
          </div>
        </div>
      </div>
    </>
  );
}

SearchBar.propTypes = {
  keyword: PropTypes.string.isRequired,
  keywordChange: PropTypes.func.isRequired,
};

export default SearchBar;
