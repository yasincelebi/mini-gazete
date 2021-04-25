import axios from "axios";
import React, { useEffect, useState } from "react";
import { withRouter } from "react-router-dom";
import { Container, Row } from "reactstrap";
import NewsCard from "../NewsCard/NewsCard";
import "./Category.scss";

const API_KEY = process.env.REACT_APP_API_KEY;
const Category = ({
  location: {
    state: { id, name, value },
  },
  history,
}) => {
  const [response, setResponse] = useState();
  useEffect(() => {
    axios
      .get(
        `https://newsapi.org/v2/top-headlines?country=us&category=${name}&apiKey=${API_KEY}`
      )
      .then((res) => setResponse(res.data.articles))
      .catch((err) => console.log(err));
  });

  return (
    <>
      <Container>
        <Row>
          <div className="w-100">
            <h1 className="text-center categoryTitle">{name}</h1>
          </div>
          {response &&
            response.map((e, i) => {
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
                  .replace(/[^a-zA-Z-0-9öçğışü]/gm, "");
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
        </Row>
      </Container>
    </>
  );
};

export default withRouter(Category);
