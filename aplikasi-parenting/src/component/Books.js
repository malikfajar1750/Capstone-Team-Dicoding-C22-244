import React from "react";
import Card from "./Card";
import { PropTypes } from "prop-types";

function Books({ books }) {
  return (
    <div className="w-full h-auto p-5 rounded-2xl flex flex-col overflow-hidden">
      <div className="flex flex-wrap justify-around">
        {books.map((book) => (
          <Card key={book.id} id={book.id} {...book} />
        ))}
      </div>
    </div>
  );
}

Books.propTypes = {
  books: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Books;
