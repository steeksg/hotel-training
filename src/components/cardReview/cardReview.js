import React, { useState, useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import classNames from "classnames";

import Icon from "@mdi/react";
import { mdiHeart } from "@mdi/js";

import "./cardReview.scss";

export default function CardReview(props) {
  const { review } = props;

  const [likeCount, setLikeCount] = useState(12);
  const [isLike, setIsLike] = useState(false);

  const LikeCounter = (props) => {
    const { likeCount, setLikeCount, isLike, setIsLike } = props;

    const handleClick = () => {
      setIsLike(!isLike);
      setLikeCount((prev) => {
        return isLike ? prev - 1 : prev + 1;
      });
    };

    useEffect(() => {}, [likeCount]);

    var cnlikeCounter = classNames("cardReview--likeCounter", {
      "cardReview--likeCounter-active": isLike,
    });

    var cnlikeCount = classNames("cardReview--likeCount", {
      "cardReview--likeCount-active": isLike,
    });

    return (
      <div onClick={handleClick} className={cnlikeCounter}>
        <Icon
          path={mdiHeart}
          size={0.5}
          color={isLike ? "#BC9CFF" : "rgba(31, 32, 65, 0.25)"}
        />
        <div className={`${cnlikeCount} ml-1`}>{likeCount}</div>
      </div>
    );
  };

  return (
    <div className="cardReview--container mb-3">
      <Row>
        <Col className="col-2 col-md-1">
          <div
            className="cardReview--avatar mb-2"
            style={{
              backgroundImage: `url(${review.user.avatar})`,
            }}
          ></div>
        </Col>
        <Col>
          <div className="cardReview--fullName mb-2">{review.user.name}</div>
          <div className="cardReview--age mb-2">{`${review.ageReview} days ago`}</div>
        </Col>
      </Row>
      <Row>
        <Col className="col-2 col-md-1">
          <LikeCounter
            likeCount={likeCount}
            setLikeCount={setLikeCount}
            isLike={isLike}
            setIsLike={setIsLike}
          />
        </Col>
        <Col>
          <div className="cardReview--text">{review.text}</div>
        </Col>
      </Row>
    </div>
  );
}
