import React from "react";
import { Container, Row, Col } from "reactstrap";
import Recommended from "../Recommended/Recommended";
import "./Single.scss";
const Single = ({
  location: {
    state: { title, content, urlToImage },
  },
}) => {
  const contents = [];
  for (let i = 0; i < 3; i++) {
    contents.push(content);
  }

  return (
    <div>
      <Container>
        <Row>
          <Col md="8">
            <h1>{title.split("-")[0]}</h1>

            <p className="content">{contents}</p>
            <img src={urlToImage} alt="newsImage" className="w-100" />
            <p className="content">{contents + contents}</p>
          </Col>
          <Recommended query={title.split(" ")[0]} />
        </Row>
      </Container>
    </div>
  );
};

export default Single;
