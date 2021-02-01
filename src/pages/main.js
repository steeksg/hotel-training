import React from "react";
import { Jumbotron, Container } from "react-bootstrap";

import styled from "styled-components";
import FormSearchRoom from "../components/formSearchRoom/formSearchRoom";
import mainJumbo from "../img/mainJumbo.png";

const Styles = styled.div`
  .jumbo {
    background: url(${mainJumbo}) no-repeat fixed bottom;
    background-size: cover;
    min-height: 70vh;
    position: relative;
    padding-top: 75px;
    padding-bottom: 0;
    margin-bottom: 0;
  }

  .jumboContainer {
    min-height: 60vh;
  }
`;

export default function MainPage({
  reserveData,
  handleChangeDate,
  handleChangeGuestsCount,
  changeDateHandler
}) {
  return (
    <Styles>
      <Jumbotron fluid className="jumbo">
        <Container className="d-flex flex-column justify-content-between jumboContainer">
          <div className="align-self-start">
            <FormSearchRoom
              reserveData={reserveData}
              handleChangeDate={handleChangeDate}
              handleChangeGuestsCount={handleChangeGuestsCount}
            />
          </div>
          <div className="d-flex justify-content-end align-self-end mt-3">
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
