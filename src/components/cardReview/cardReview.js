import React from "react";
import { Col, Row, Image } from "react-bootstrap";

import Avatar_1 from "./user_1.png";
import Avatar_2 from "./user_2.png";

import "./cardReview.scss";

export default function CardReview() {
  const LikeCounter = (props) => {
    const {count} = props;
    return (
      <div className="cardReview--likeCounter">
        <Row>
          <Col></Col>
          <Col className="cardReview--likeCount">{count}</Col>
        </Row>
      </div>
    );
  };

  return (
    <>
      <Row>
        <Col className="col-1">
          <div
            className="cardReview--avatar"
            style={{
              backgroundImage: `url(${Avatar_1})`,
            }}
          ></div>
          <LikeCounter count="12" />
        </Col>
        <Col>
          <div className="cardReview--fullName mb-2">Murad Saraphanov</div>
          <div className="cardReview--age mb-2">5 days ago</div>
          <div className="cardReview--text">
            Gorgeous mattress on the bed in the master bedroom! And the ottoman
            is amazing. And the walls are really noise-canceling. He shouted
            compliments to the cook — no one complained from the neighbors.
          </div>
        </Col>
      </Row>
    </>
  );
}
