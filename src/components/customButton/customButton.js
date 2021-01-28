import React from "react";
import { Button } from "react-bootstrap";

import Icon from "@mdi/react";
import { mdiArrowRight } from "@mdi/js";

import "./customButton.scss";

export default function CustomButton({ title, as, to }) {
  return (
    <div className="customButton">
      <Button
        as={as}
        to={to}
        variant="primary"
        type="submit"
        className="customButton--button"
      >
        {title}
      </Button>
      <div className="customButton--arrow">
        <Icon
          path={mdiArrowRight}
          size={1.2}
          color="white"
        />
      </div>
    </div>
  );
}
