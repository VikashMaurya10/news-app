import React, { useEffect, useState } from "react";
import axios from "axios";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import ShowCaseSkeleton from "./skeleton/ShowCaseSkeleton";

const ShowCase = ({ query, endpoint }) => {
  const [news, setNews] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios({
      method: "get",
      url: `https://newsapi.org/v2/${endpoint}?q=${query}&from=2023-04-26&apiKey=e9565a9f001d473a9a9a613e7f9cc76d`,
    }).then((res) => {
      setNews(res.data.articles);
      setIsLoading(false)
    });
  }, []);
  return (
    <div className="showcase">
      <Swiper
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
      >
        {isLoading && <ShowCaseSkeleton cards={1} />}
        {news.map((value, index) => {
          const { title, description, url, urlToImage, publishedAt, content } =
            value;
          if (index < 15) {
            return (
              <SwiperSlide className="slides" key={index}>
                <div
                  className="slide"
                  style={{ backgroundImage: `url(${urlToImage})` }}
                  onClick={() => {
                    window.open(`${url}`, "_self");
                  }}
                >
                  <h1>
                    {title} (<span>{publishedAt.slice("0", "10")}</span>)
                  </h1>
                </div>
              </SwiperSlide>
            );
          }
        })}
      </Swiper>
    </div>
  );
};

export default ShowCase;
