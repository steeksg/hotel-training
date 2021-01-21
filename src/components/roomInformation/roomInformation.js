import React from "react";
import { Row, Col } from "react-bootstrap";
import Icon from "@mdi/react";
import { mdiCity, mdiFire, mdiEmoticonOutline } from "@mdi/js";

import "./roomInformation.scss";

const types = {
  comfort: {
    icon: mdiEmoticonOutline,
    title: "Comfort",
    text: "Noise-absorbing walls",
  },
  convenience: {
    icon: mdiCity,
    title: "Convenience",
    text: "A window in each of the bedrooms",
  },
  cosiness: {
    icon: mdiFire,
    title: "Cosiness",
    text: "The room is equipped with a fireplace",
  },
};

export default function RoomInformation(props) {
  const { items } = props;

  const ItemIcon = (props) => {
    const { path } = props;
    return <Icon path={path} size={1.7} color="#BC9CFF" />;
  };

  const Item = (props) => {
    const { icon, title, text } = props;
    return (
      <>
        <Row className="my-3">
          <Col className="col-2">
            <div className="roomInformation--icon">
              <ItemIcon path={icon} />
            </div>
          </Col>
          <Col className="col-10">
            <Row>
              <span className="roomInformation--title">{title}</span>
            </Row>
            <Row>
              <span className="roomInformation--text">{text}</span>
            </Row>
          </Col>
        </Row>
      </>
    );
  };

  return (
    <>
      {items.map((item, index, arr) => {
        return (
          <>
            <Item
              icon={types[item].icon}
              title={types[item].title}
              text={types[item].text}
            />
            {console.log(index + " " + arr.length)}
            {index + 1 < arr.length && (
              <div className="roomInformation--divider" />
            )}
          </>
        );
      })}
    </>
  );
}
