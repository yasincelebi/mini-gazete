import { NewsContext } from "../../context/NewsContext";
import React, { useContext, useState } from "react";
import { Input } from "semantic-ui-react";
import { withRouter } from "react-router-dom";
import { Container, Row } from "reactstrap";
import "./Search.scss";
import NewsCard from "../NewsCard/NewsCard";
const Search = ({ history }) => {
  const { changeQuery } = useContext(NewsContext);

  const { response } = useContext(NewsContext);
  const [queryValue, setQueryValue] = useState("");
  const handleChange = (e) => {
    console.log(e.target.value);
    setQueryValue(e.target.value);
  };

  return (
    <div>
      <form onSubmit={changeQuery} className="searchBar">
        <Input
          action={{ icon: "search" }}
          type="text"
          value={queryValue}
          onChange={handleChange}
          className="deneme"
        />
      </form>
      <Container>
        <Row>
          {queryValue &&
            response.map((e, i) => {
              const {
                title,
                description,
                urlToImage,
                author,
                source,
                publishedAt,
                content,
                url,
              } = e;
              const handleClick = () => {
                const newsUrl = e.title
                  .split(" ")
                  .join("-")
                  .substring(0, 100)
                  .toLowerCase()
                  .replace(/[^a-zA-Z-0-9öğçıüşÖĞÇİÜŞ]/g, "");
                console.log(newsUrl);
                history.push(`/${newsUrl}`, {
                  title,
                  description,
                  urlToImage,
                  author,
                  source,
                  publishedAt,
                  content,
                  url,
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
    </div>
  );
};

export default withRouter(Search);
