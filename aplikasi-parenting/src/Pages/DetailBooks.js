import React from "react";
import { useParams } from "react-router-dom";
import { getBook } from "../utils/local-data";
import { useNavigate } from "react-router-dom";
import ErrorPage from "../Pages/ErrorPage";
import { PropTypes } from "prop-types";

function DetailPageWrapper() {
  const { id } = useParams();
  const nav = useNavigate();

  nav("/");

  return <DetailPage id={id} />;
}

class DetailPage extends React.Component {
  constructor(props) {
    super(props);
    const books = getBook(props.id);
    this.state = {
      id: props.id,
      title: books.title,
      author: books.author,
      release: books.release,
      publisher: books.publisher,
      pages: books.pages,
      description: books.description,
      thumbnail: books.thumbnail,
    };
  }

  render() {
    return (
      <section>
        {getBook(this.state.id) ? (
          <section className="px-10 flex justify-center items-center">
            <div className="w-full h-auto p-10 flex my-10 bg-slate-50 bg-opacity-75 rounded-lg justify-between">
              <div className="w-1/2 border border-gray-300 rounded-lg overflow-hidden shadow-xl">
                <img src={this.state.thumbnail} alt={this.state.title} className="object-cover w-full h-full" />
              </div>
              <div className="w-1/4 flex flex-col leading-loose p-5 border border-gray-300 rounded-lg overflow-hidden shadow-xl">
                <h3 className="inline-flex justify-center font-bold mb-5 text-2xl"><p>{this.state.title}</p></h3>
                <h3 className="inline-flex flex-col justify-between mb-5"><p>Penulis : </p><p>{this.state.author}</p></h3>
                <h3 className="inline-flex flex-col justify-between mb-5"><p>Tanggal Terbit : </p><p>{this.state.release}</p></h3>
                <h3 className="inline-flex flex-col justify-between mb-5"><p>Penerbit : </p><p>{this.state.publisher}</p></h3>
                <h3 className="inline-flex flex-col justify-between mb-5"><p>Jumlah Halaman : </p><p>{this.state.pages}</p></h3>
              </div>
              <div className="inline-flex flex-col w-1/4 leading leading-loose text-justify p-5 border border-gray-300 rounded-lg overflow-hidden shadow-xl"><p className="text-center text-2xl font-bold mb-5">Description</p><p>{this.state.description}</p></div>
            </div>
          </section>
        ) : (
          <ErrorPage />
        )}
      </section>
    );
  }
}

DetailPage.propTypes = {
  id: PropTypes.string.isRequired,
};

export default DetailPageWrapper;
