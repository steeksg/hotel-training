import React from "react";
import { Button } from "react-bootstrap";

import Icon from "@mdi/react";
import { mdiArrowRight } from "@mdi/js";

import "./customButton.scss";

export default function CustomButton({ title, handelClick }) {
  return (
    <div className="customButton" onClick={handelClick}>
      <Button variant="primary" className="customButton--button">
        {title}
      </Button>
      <div className="customButton--arrow">
        <Icon path={mdiArrowRight} size={1.2} color="white" />
      </div>
    </div>
  );
}
