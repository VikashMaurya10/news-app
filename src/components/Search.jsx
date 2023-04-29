import axios from "axios";
import React, { useEffect, useState } from "react";
import { BiSearchAlt } from "react-icons/bi";

const Search = () => {
  const [news, setNews] = useState([]);
  const [query, setQuery] = useState("");
  useEffect(() => {
    axios({
      method: "get",
      url: `https://newsapi.org/v2/everything?q=${query}&apiKey=47a37d78b92b4b83b156f537e3c567e3`,
    }).then((res) => {
      setNews(res.data.articles);
    });
  }, [query]);
  const searchBox = () => {
    document
      .querySelector(".search_box_input")
      .classList.toggle("search_box-width");
    document.querySelector(".search_box_input").focus();
    document
      .querySelector(".cardcontainer")
      .classList.toggle("hidesearchresult");
  };
  const handleChange = (e) => {
    const { value } = e.target;
    setQuery(value);
  };

  let searchResults = null;
  if (news != undefined) {
    if (news.length > 0) {
      searchResults = (
        <ul className="cardcontainer">
          {news.slice("0", "5").map((news, index) => (
            <li
              key={index}
              className="d-f ai-c"
              onClick={() => {
                window.open(news.url, "_blank");
              }}
            >
              <img src={news.urlToImage} alt={news.title.slice('0','5')} />
              <h5>{news.title}</h5>
            </li>
          ))}
        </ul>
      );
    }
  } else {
    searchResults = <p>No news found!!!</p>;
  }
  return (
    <div>
      <div className="search_box d-f ai-c">
        <input
          className="search_box_input"
          type="text"
          placeholder="Search..."
          value={query}
          onChange={handleChange}
        />
        <BiSearchAlt className="icon" onClick={searchBox} />
      </div>
      {searchResults}
    </div>
  );
};

export default Search;
