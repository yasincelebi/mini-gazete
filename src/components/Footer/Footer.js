import React, { useEffect } from "react";
import { Container, Row, Col } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import "./Footer.scss";
const Footer = () => {
  useEffect(() => {
    console.clear();
  });
  return (
    <div className="footer">
      <hr />
      <Container>
        <Row className="text-center ml-5">
          <Col md="4" className="text-left">
            <div>Dummy Address Lorem Ipsum Sit Amet</div>
            <div>Dummy Pin</div>
            <div>Dummy place</div>
            <div>Telephone : 1-800-123-4567</div>
            <div>Email : info@dummy.com</div>
            <br />
            <div>
              <a href="/">Dummy Newsletter Link </a>
            </div>
            <div className="copyright">Copyrights &copy; Lorem 2021</div>
          </Col>
          <Col md="4" className="text-left">
            <ul>
              <li>
                <a href="/">Dummy Link</a>
              </li>
              <li>
                <a href="/">Lorem Ipsum</a>
              </li>
              <li>
                <a href="/">Dolor sit</a>
              </li>
              <li>
                <a href="/">Amet</a>
              </li>
              <li>
                <a href="/">Dummy Link</a>
              </li>
            </ul>
          </Col>
          <Col md="4" className="text-left">
            <div className="socials">
              <span className="social linkedin">
                <FontAwesomeIcon icon={faLinkedin} />
              </span>
              <span className="social insta">
                <FontAwesomeIcon icon={faInstagram} />
              </span>
              <span className="social twitter">
                <FontAwesomeIcon icon={faTwitter} />
              </span>
            </div>
            <div className="email text-left">example@example.com</div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Footer;
