import axios from "axios";
import React, { useState, useEffect } from "react";
import GridSkeleton from "./skeleton/GridSkeleton";
import { FiChevronRight } from "react-icons/fi";
import { RiShareForwardFill } from "react-icons/ri";

const Grid = ({ category, heading }) => {
  const [news, setNews] = useState([]);
  const [more, setMore] = useState("5");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios({
      method: "get",
      url: `https://newsapi.org/v2/top-headlines?country=in&category=${category}&apiKey=47a37d78b92b4b83b156f537e3c567e3`,
      // vicky:29f8e42efe874ee2be23f0d1edb6844b
    }).then((res) => {
      setNews(res.data.articles);
      setIsLoading(false)
    });
  }, []);
  return (
    <div className="grid">
      <div className="grid__title d-f ai-c jc-sb">
        <h1>{heading}</h1>
        <button
          onClick={() => {
            setMore(news.length);
          }}
          className="d-f ai-c"
        >
          show more <FiChevronRight />
        </button>
      </div>
      <div className="grid__cards">
        {isLoading && <GridSkeleton cards={5} />}
        {news.slice("0", more).map((value, index) => {
          const {
            title,
            author,
            description,
            url,
            urlToImage,
            content,
            publishedAt,
          } = value;
          if (urlToImage != null) {
            return (
              <div className="container">
                <div key={index}>
                  <div
                    className="card"
                    onClick={() => {
                      // window.open(`${url}`, "_blank");
                      console.log("card");
                    }}
                  >
                    <img src={urlToImage} alt={title.slice("0", "10")} />
                    <h1>{title}</h1>
                    <div className="d-f ai-c jc-sb">
                      <span>{author}</span>
                      <span>{publishedAt.slice("0", "10")}</span>
                    </div>
                  </div>
                </div>
                <div className="shareBtns d-f ai-c jc-c">
                  <RiShareForwardFill className="icon" />
                </div>
              </div>
            );
          }
        })}
      </div>
    </div>
  );
};

export default Grid;
