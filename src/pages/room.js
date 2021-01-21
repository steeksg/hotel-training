import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import RoomCollage from "../components/RoomCollage/roomCollage";
import FormSearchRoom from "../components/formSearchRoom/formSearchRoom";
import RoomInformation from "../components/roomInformation/roomInformation";
import CardReview from "../components/cardReview/cardReview";

const dataExample = ["comfort", "convenience", "cosiness"];

export default function RoomPage() {
  return (
    <>
      <Container fluid className="containerRoomCollage pl-0 pr-0 mb-5">
        <RoomCollage />
      </Container>
      <Container>
        <Row>
          <Col className="col-9">
            <Row className="mb-3">
              <Col className="col-6 pl-0">
                <h3> Room Information </h3>
                <RoomInformation items={dataExample} />
              </Col>
              <Col className="col-6">
                <h3> Impressions of the rooms </h3>
              </Col>
            </Row>
            <Row className="mb-3">
              <h3>Guest reviews of the room</h3>
              <CardReview />
            </Row>
          </Col>
          <Col className="col-3">
            <FormSearchRoom />
          </Col>
        </Row>
      </Container>
    </>
  );
}
