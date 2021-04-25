import React, { useContext, useEffect } from "react";
import { NewsContext } from "../../context/NewsContext";
import NewsCard from "../NewsCard/NewsCard";
import "./Recommended.scss";
const Recommended = ({ query, history }) => {
  const { response, setQuery } = useContext(NewsContext);
  const { title } = response;
  useEffect(() => {
    setQuery({ title }); // search the API with the first word of the title
  }, [setQuery, title]);
  return (
    <>
      {response.map((e, i) => {
        console.log(e);
        const {
          title,
          description,
          urlToImage,
          author,
          source,
          publishedAt,
          content,
        } = e;
        const handleClick = () => {
          const newsUrl = e.title
            .split(" ")
            .join("-")
            .substring(0, 100)
            .toLowerCase()
            .replace(/[^a-zA-Z-0-9]/gm, ""); // remove special characters from url
          console.log(newsUrl);
          history.push(`/${newsUrl}`, {
            title,
            description,
            urlToImage,
            author,
            source,
            publishedAt,
            content,
          });
        };
        return (
          <NewsCard
            clickEvent={handleClick}
            imageUrl={urlToImage}
            altText={title}
            newsTitle={title}
            cardClass="kart"
            titleClass="cardTitle"
          />
        );
      })}
    </>
  );
};

export default Recommended;
