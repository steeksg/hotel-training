import React from "react";
import { Card, Row, Col, Carousel } from "react-bootstrap";
import Ratings from "react-ratings-declarative";

import imgRoom from "./img.png";
import "./cardRoom.scss";

export default function CardRoom(props) {
  const { number, price, rating, reviews } = props;

  return (
    <>
      <Card className="cardRoom">
        {/* <Card.Img variant="top" src={imgRoom} /> */}
        <Carousel interval={null}>
          <Carousel.Item>
            <img className="d-block w-100" src={imgRoom} alt="First slide" />
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={imgRoom} alt="Third slide" />
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={imgRoom} alt="Third slide" />
          </Carousel.Item>
        </Carousel>
        <Card.Body>
          <Row>
            <Col>
              <h4 className="cardRoom--number align-middle">{`№${number}`}</h4>
            </Col>
            <Col className="ml-auto d-flex justify-content-end">
              <span className="cardRoom--price align-middle">
                {`${price}$ `}
                <span className="cardRoom--textByDay align-middle">by day</span>
              </span>
            </Col>
          </Row>
          <div className="cardRoom--divider"></div>
          <Row>
            <Col className="col-7 d-flex align-content-center pr-0">
              <Ratings
                rating={rating}
                widgetDimensions="24px"
                widgetSpacings="0px"
                widgetRatedColors="#BC9CFF
                "
              >
                <Ratings.Widget />
                <Ratings.Widget />
                <Ratings.Widget />
                <Ratings.Widget />
                <Ratings.Widget />
              </Ratings>
            </Col>
            <Col className="ml-auto d-flex justify-content-end pl-0">
              <span className="cardRoom--reviews align-bottom">
                {`${reviews} `}
                <span className="cardRoom--textReviews align-middle">
                  reviews
                </span>
              </span>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </>
  );
}
