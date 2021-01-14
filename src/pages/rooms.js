import React from "react";
import { Container } from "react-bootstrap";
import CardRoom from "../components/cardRoom/cardRoom";
import JumboPlug from "../components/jumboPlug/jumboPlug";

export default function RoomsPage() {
  return (
    <>
      <JumboPlug textPlug="Rooms page" />
      <Container>
        <CardRoom number="789" price="122" reviews="52" />
      </Container>
    </>
  );
}
