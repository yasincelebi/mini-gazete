import React from "react";
import { CardBody, CardImg, CardTitle, Col, Card } from "reactstrap";

import "../Search/Search.scss";
const NewsCard = ({
  clickEvent,
  imageUrl,
  altText,
  newsTitle,
  cardClass,
  titleClass,
}) => {
  return (
    <>
      <Col md="4">
        <Card className={cardClass} onClick={clickEvent}>
          <CardImg
            top
            width="100%"
            src={imageUrl}
            alt={altText}
            height="100%"
          />
          <CardBody>
            <CardTitle tag="h3" className={titleClass}>
              {newsTitle.split("-")[0]}
            </CardTitle>
          </CardBody>
        </Card>
      </Col>
    </>
  );
};

export default NewsCard;
