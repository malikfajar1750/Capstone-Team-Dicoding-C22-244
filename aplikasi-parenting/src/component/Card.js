import React from "react";
import { Link } from "react-router-dom";
import { PropTypes } from "prop-types";

function Card({ id, title, author, release, thumbnail }) {
  return (
    <>
      <div className="w-80 h-auto p-5 rounded-2xl bg-[#b79c82] overflow-hidden hover:shadow-2xl text-white hover:text-black mb-10 ease-in-out duration-300">
        <Link to={`/books/${id}`} className="h-full">
          <div className=" inline-flex w-72 h-60 justify-center items-center  my-2 mx-auto mb-5">
            <img
              src={thumbnail}
              alt={title}
              className="object-cover w-64 h-60"
            />
          </div>
          <div className="flex justify-between mb-2">
            <div className="flex flex-col text-sm ">
              <h3 className="my-2">Judul : {title}</h3>

              <h3 className="my-2">Pengarang : {author}</h3>
              <h3 className="my-2">Tahun Terbit : {release}</h3>
            </div>
          </div>
        </Link>
      </div>
    </>
  );
}

Card.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  release: PropTypes.string.isRequired,
};

export default Card;
