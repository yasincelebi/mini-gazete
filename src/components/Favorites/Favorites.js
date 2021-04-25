import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { Col, Row } from "reactstrap";

const API_KEY = process.env.REACT_APP_API_KEY;
const Favorites = () => {
  const [favResponse, setFavResponse] = useState();
  useEffect(() => {
    axios
      .get(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${API_KEY}`)
      .then((res) => setFavResponse(res.data.articles))
      .catch((err) => console.log(err));
  }, []);
  return (
    <>
      <h4>
        Please click on the heart next to the newspaper you want to bookmark
      </h4>
      {favResponse &&
        favResponse.map((e, i) => {
          const handleClick = (x) => {
            console.log(x);
          };
          return (
            <Col md="6">
              <Row>
                <Col md="6">{e.source.name}</Col>
                <Col md="6">
                  <FontAwesomeIcon
                    icon={faHeart}
                    onClick={handleClick}
                    className={e.source.name.split(" ").join("").toLowerCase()}
                  />
                </Col>
              </Row>
            </Col>
          );
        })}
    </>
  );
};

export default Favorites;
