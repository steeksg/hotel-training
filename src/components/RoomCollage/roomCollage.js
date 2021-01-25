import React from "react";
import { Row, Col } from "react-bootstrap";

import "./roomCollage.scss";

import photo_1 from "./room_1.png";
import photo_2 from "./room_2.png";
import photo_3 from "./room_3.png";

export default function RoomCollage() {
  return (
    <>
      <Row className="no-gutters">
        {/* <Col className="col-xl-4 col-sm-8 col-12"> */}
        <Col className="col-sm-8 col-12">
          <div
            className="roomCollage--imgContainer large"
            style={{
              backgroundImage: `url(${photo_1})`,
            }}
          ></div>
        </Col>
        <Col className="col-sm-4 col-12">
        {/* <Col className="col-xl-8 col-sm-4 col-12"> */}
          <Row className="no-gutters">
            <Col className="col-lg-12 col-12">
            {/* <Col className="col-xl-6 col-lg-12 col-12"> */}
              <div
                className="roomCollage--imgContainer small"
                style={{
                  backgroundImage: `url(${photo_2})`,
                }}
              ></div>
            </Col>
            <Col className="col-lg-12 col-12">
            {/* <Col className="col-xl-6 col-lg-12 col-12"> */}
              <div
                className="roomCollage--imgContainer small"
                style={{
                  backgroundImage: `url(${photo_3})`,
                }}
              ></div>
            </Col>
          </Row>
        </Col>
      </Row>
    </>
  );
}
