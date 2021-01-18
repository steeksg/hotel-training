import React, { useState } from "react";
import { Row, Col } from "react-bootstrap";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown, faAngleUp } from "@fortawesome/free-solid-svg-icons";

import "./selectGuests.scss";

export default function SelectGuests(props) {
  const [show, setShow] = useState(false);
  return (
    <div
      className="selectGuests position-relative form-control"
      onClick={() => {
        setShow(!show);
      }}
    >
      <Row>
        <Col className="col-10">
          <input
            type="text"
            placeholder="How much guests?"
            className="selectGuests--input"
          />
        </Col>
        <Col className="col-2">
          <div className="selectGuests--toggle">
            <FontAwesomeIcon icon={show ? faAngleUp : faAngleDown} size="1x" />
          </div>
        </Col>
      </Row>
    </div>
  );
}
