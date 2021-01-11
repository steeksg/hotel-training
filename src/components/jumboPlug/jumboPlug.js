import React from "react";
import { Jumbotron, Container } from "react-bootstrap";
import styled from "styled-components";

import bgPlug from "./bgPlug.png";

const Styles = styled.div`
  .jumbo {
    background: url(${bgPlug}) no-repeat fixed bottom;
    background-size: cover;
    min-height: 70vh;
    position: relative;
    padding-top: 75px;
    padding-bottom: 0;
    margin-bottom: 0;
  }
`;

export default function JumboPlug(props) {
  const { textPlug } = props;

  return (
    <Styles>
      <Jumbotron className="jumbo">
        <Container>
          <h1>{textPlug}</h1>
        </Container>
      </Jumbotron>
    </Styles>
  );
}
