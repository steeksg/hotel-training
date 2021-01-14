import React from "react";
import { Card, Row, Col } from "react-bootstrap";

import imgRoom from "./img.png";
import "./cardRoom.scss";

export default function CardRoom(props) {
  const { number, price, rating, reviews } = props;

  return (
    <>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={imgRoom} />
        <Card.Body>
          <Row>
            <Col>
              <h4>{`№${number}`}</h4>
            </Col>
            <Col className="ml-auto">
              <Card.Text className="text-right">{`${price}$ by day`}</Card.Text>
            </Col>
          </Row>
          <div className="cardRoom--divider"></div>
          <Row>
            <Col className="ml-auto">
              <Card.Text className="text-right">{`${reviews} reviews`}</Card.Text>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </>
  );
}
