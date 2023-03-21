import React, { useState, useEffect } from "react";
import NewsCard from "./NewsCard";

const News = () => {
  const [latestNews, setLatestNews] = useState([]);

  console.log(latestNews);

  useEffect(() => {
    //url
    const url = "https://mmo-games.p.rapidapi.com/latestnews";
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "8a74642ab2msh78918e777cf9db3p15c1a2jsne394c392b92d",
        "X-RapidAPI-Host": "mmo-games.p.rapidapi.com",
      },
    };

    //fetch latest news
    const fetchNews = async () => {
      const response = await fetch(url, options);
      const data = await response.json();

      //slice 10 news article only
      const slicedArray = data.slice(0, 10);

      //set news data
      setLatestNews(slicedArray);
    };

    fetchNews();
  }, []);
  return (
    <div className='latest-news p-4'>
      <h2 className='text-xl md:text-2xl uppercase'>latest news</h2>

      <div className='news-flex p-4'>
        {latestNews.map(({ title, id, thumbnail, short_description }) => (
          <NewsCard
            key={id}
            title={title}
            thumbnail={thumbnail}
            description={short_description}
          />
        ))}
      </div>
    </div>
  );
};

export default News;
