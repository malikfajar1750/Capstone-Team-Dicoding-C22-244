import React from "react";
import { useSearchParams } from "react-router-dom";
import { getActiveBooks } from "../utils/local-data";
import Books from "../component/Books";
import SearchBar from "../component/SearchBar";
import { PropTypes } from "prop-types";

function MateriWrapper() {
  const [searchParams, setSearchParams] = useSearchParams();
  const keyword = searchParams.get("keyword");
  function changeSearchParams(keyword) {
    setSearchParams({ keyword });
  }

  return <Materi defaultKeyword={keyword} keywordChange={changeSearchParams} />;
}

class Materi extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      books: getActiveBooks(),
      keyword: props.defaultKeyword || "",
    };
    this.onKeywordChangeHandler = this.onKeywordChangeHandler.bind(this);
  }
  onKeywordChangeHandler(keyword) {
    this.setState(() => {
      return {
        keyword,
      };
    });
    this.props.keywordChange(keyword);
  }

  render() {
    const books = this.state.books.filter((book) => {
      return book.title
        .toLowerCase()
        .includes(this.state.keyword.toLowerCase());
    });
    return (
      <section className="px-10 flex">
        <div className="w-[1300px] m-auto flex flex-col justify-center items-center">
          <SearchBar
            keyword={this.state.keyword}
            keywordChange={this.onKeywordChangeHandler}
            className=""
          />
          <div className="w-full h-full p-5 rounded-2xl  flex flex-wrap ">
            {books.length !== 0 ? <Books books={books} /> : <p>Empty Books</p>}
          </div>
        </div>
      </section>
    );
  }
}

Materi.propTypes = {
  defaultKeyword: PropTypes.string,
  keywordChange: PropTypes.func.isRequired,
};

export default MateriWrapper;

