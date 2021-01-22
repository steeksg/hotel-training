import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import RoomCollage from "../components/RoomCollage/roomCollage";
import FormSearchRoom from "../components/formSearchRoom/formSearchRoom";
import RoomInformation from "../components/roomInformation/roomInformation";
import CardReview from "../components/cardReview/cardReview";

import Avatar_1 from "../img/user_1.png";
import Avatar_2 from "../img/user_2.png";

const dataExample = ["comfort", "convenience", "cosiness"];
const reviewsExample = [
  {
    user: { name: "Murad Saraphanov", avatar: Avatar_1 },
    ageReview: 5,
    likeCount: 12,
    text:
      "Gorgeous mattress on the bed in the master bedroom! And the ottoman is amazing. And the walls are really noise-canceling. He shouted compliments to the cook — no one complained from the neighbors.",
  },
  {
    user: { name: "Patricia Steklishkova", avatar: Avatar_2 },
    ageReview: 7,
    likeCount: 2,
    text:
      "The service is excellent! Everything is neat and clean. I advise you to order breakfast in the room, every day a new dish and dessert as a compliment.",
  },
];

export default function RoomPage() {
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
                  <RoomInformation items={dataExample} />
                </Container>
              </Col>
              <Col className="col-12 col-md-6">
                <h3> Impressions of the rooms </h3>
              </Col>
            </Row>
            <Row className="mb-3">
              <Container>
                <h3>Guest reviews of the room</h3>
                {reviewsExample.map((review) => {
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
          <Col className="col-12 col-lg-3 d-flex justify-content-center">
            <FormSearchRoom />
          </Col>
        </Row>
      </Container>
    </>
  );
}
