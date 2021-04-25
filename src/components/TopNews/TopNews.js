import React, { useContext, useEffect } from "react";
import { NewsContext } from "../../context/NewsContext";
import "../Search/Search.scss";
import SliderMain from "../Slider/SliderMain";
import { withRouter } from "react-router-dom";
import { Row, Container } from "reactstrap";
import NewsCard from "../NewsCard/NewsCard";

const TopNews = ({ history }) => {
  const { response, changeQuery } = useContext(NewsContext);
  useEffect(() => {
    changeQuery();
  });

  return (
    <div>
      <SliderMain />
      <Container>
        <Row>
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
                key={i}
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
    </div>
  );
};

export default withRouter(TopNews);
