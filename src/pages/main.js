import React from "react";
import { Jumbotron, Container, Row, Col } from "react-bootstrap";

import styled from "styled-components";
import FormSearchRoom from "../components/formSearchRoom/formSearchRoom";
import mainJumbo from "../img/mainJumbo.png";

const Styles = styled.div`
  .jumbo {
    background: url(${mainJumbo}) no-repeat fixed center;
    background-size: cover;
    min-height: 80vh;
    position: relative;
    padding-top: 70px;
    padding-bottom: 20px;
    z-index: -2;
  }
`;

export default function MainPage() {
  return (
    <Styles>
      <Jumbotron fluid className="jumbo">
        {/* <div className="overlay"></div> */}
        <Container className="d-flex flex-row justify-content-between">
          <div>
            <FormSearchRoom />
          </div>
          <div className="d-flex justify-content-end align-self-end">
            <span className="align-self-end">
              The best rooms for your work,
              <br /> leisure and just inspiration
            </span>
          </div>
        </Container>
      </Jumbotron>
    </Styles>
  );
}
