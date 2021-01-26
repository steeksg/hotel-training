import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import RoomCollage from "../components/roomCollage/roomCollage";
import FormReservedRoom from "../components/formReservedRoom/formReservedRoom";
import RoomInformation from "../components/roomInformation/roomInformation";
import CardReview from "../components/cardReview/cardReview";
import DonutChart from "../components/donutChart/donutChart";

export default function RoomPage(props) {
  const { roomInformation, reviews, roomReservedData } = props.room;

  return (
    <>
      <Container fluid className="containerRoomCollage pl-0 pr-0 mb-5">
        <RoomCollage />
      </Container>
      <Container>
        <Row>
          <Col className="col-12 col-lg-9">
            <Row className="mb-3">
              <Col className="col-12 col-md-6 pl-0">
                <Container>
                  <h3> Room Information </h3>
                  <RoomInformation items={roomInformation} />
                </Container>
              </Col>
              <Col className="col-12 col-md-6">
                <h3> Impressions of the rooms </h3>
                <DonutChart data={reviews.counts} />
              </Col>
            </Row>
            <Row className="mb-3">
              <Container>
                <h3>Guest reviews of the room</h3>
                {reviews.values.map((review) => {
                  return (
                    <CardReview
                      review={review}
                      key={review.user.name + review.text}
                    />
                  );
                })}
              </Container>
            </Row>
            <Row className="mb-3">
              <Col className="col-12 col-md-6 pl-0">
                <Container>
                  <h3> Rules </h3>
                  <ul className="roomRuleList">
                    <li className="roomRuleList--item">
                      Not allowed with pets
                    </li>
                    <li className="roomRuleList--item">No parties or events</li>
                    <li className="roomRuleList--item">
                      Arrival time is after 13:00, and departure time is before
                      12:00
                    </li>
                  </ul>
                </Container>
              </Col>
              <Col className="col-12 col-md-6">
                <h3> Cancel </h3>
                <p>
                  Free cancellation within 48 hours. After that, if canceled no
                  later than 5 days in advance. before arrival, you will receive
                  a full refund minus the service fee.
                </p>
              </Col>
            </Row>
          </Col>
          <Col className="col-12 col-lg-3 d-flex align-items-start justify-content-center">
            <FormReservedRoom
              number={roomReservedData.number}
              dates={roomReservedData.dates}
              guests={roomReservedData.guests}
              price={roomReservedData.price}
            />
          </Col>
        </Row>
      </Container>
    </>
  );
}
