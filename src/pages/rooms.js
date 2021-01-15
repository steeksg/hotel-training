import React from "react";
import { Container, Row, Col, CardColumns } from "react-bootstrap";
import CardRoom from "../components/cardRoom/cardRoom";

const testData = [
  { number: 1, price: 200, rating: 3, reviews: 1 },
  { number: 2, price: 200, rating: 4, reviews: 45 },
  { number: 3, price: 200, rating: 5, reviews: 167 },
  { number: 22, price: 230, rating: 1, reviews: 2 },
  { number: 23, price: 300, rating: 2, reviews: 4 },
  { number: 24, price: 400, rating: 3, reviews: 1678 },
  { number: 987, price: 500, rating: 4, reviews: 1 },
  { number: 214, price: 1, rating: 3, reviews: 2 },
  { number: 67, price: 2, rating: 3, reviews: 4 },
  { number: 6, price: 3, rating: 4, reviews: 4 },
  { number: 7, price: 4, rating: 3, reviews: 3 },
  { number: 77, price: 5, rating: 5, reviews: 4 },
];

export default function RoomsPage() {
  return (
    <>
      <Container>
        <Row>
          <Col className="col-3"></Col>
          <Col className="col-9">
            <Row>
              <Col>
                <h3>The numbers we have selected for you</h3>
              </Col>
            </Row>
            <Row>
              <Col>
                <CardColumns>
                  {testData.map((room) => {
                    return (
                      <CardRoom
                        key={room.number}
                        number={room.number}
                        price={room.price}
                        rating={room.rating}
                        reviews={room.reviews}
                      />
                    );
                  })}
                </CardColumns>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
}
