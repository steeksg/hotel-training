import React, { useState } from "react";
import { Container, Row, Col, CardColumns, Form } from "react-bootstrap";
import CardRoom from "../components/cardRoom/cardRoom";
import CustomDatepicker from "../components/customDatepicker/customDatepicker";
import CustomRange from "../components/customRange/customRange";

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
  const [startDate, setStartDate] = useState(null);
  // const [endDate, setEndDate] = useState(null);

  const [minRange, setMinRange] = useState(100);
  const [maxRange, setMaxRange] = useState(1000);

  const [minPrice, setMinPrice] = useState(minRange);
  const [maxPrice, setMaxPrice] = useState(maxRange);

  return (
    <>
      <Container>
        <Row>
          <Col className="col-12 col-md-3 col pt-3">
            <Form>
              <Form.Group controlId="controlDateOfStay">
                <h4>dates of stay</h4>
                <CustomDatepicker date={startDate} setDate={setStartDate} />
              </Form.Group>

              <Form.Group controlId="controlSelectCountGuests">
                <Form.Label className="mb-0">
                  <h4>guests</h4>
                </Form.Label>
                <Form.Control as="select">
                  <option>How much guests</option>
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                </Form.Control>
              </Form.Group>

              <Form.Group controlId="controlRangePrice">
                <Form.Label className="mb-0 d-flex justify-content-between mb-2">
                  <h4>Range price</h4>
                  {`${minPrice}$ - ${maxPrice}$`}
                </Form.Label>
                <CustomRange
                  min={minRange}
                  max={maxRange}
                  valueLeft={minPrice}
                  valueRight={maxPrice}
                  setLeft={setMinPrice}
                  setRight={setMaxPrice}
                />
                <Form.Label className="mb-0 d-flex justify-content-between mt-2">
                  Price per night stay in the room.
                </Form.Label>
              </Form.Group>

              <Form.Group controlId="controlRules">
                <Form.Label className="mb-0 d-flex justify-content-between">
                  <h4>Rules</h4>
                </Form.Label>
                <Form.Check
                  custom
                  type="checkbox"
                  label="Can smoke"
                  id="checkSmoke"
                />
                <Form.Check
                  custom
                  type="checkbox"
                  label="With pets"
                  id="checkPets"
                />
                <Form.Check
                  custom
                  type="checkbox"
                  label="Guests (no more than ten people)"
                  id="checkGuests"
                />
              </Form.Group>

              <Form.Group controlId="controlAvailability">
                <Form.Label className="mb-0 d-flex justify-content-between">
                  <h4>Availability</h4>
                </Form.Label>
                <Row>
                  <Col className="col-1">
                    <Form.Check custom type="checkbox" id="checkCorridor" />
                  </Col>
                  <Col>
                    <span className="font-weight-bold">Wide corridor</span>
                  </Col>
                </Row>

                <Form.Label>
                  The width of the corridors in the room is at least 91 cm.
                </Form.Label>

                <Row>
                  <Col className="col-1">
                    <Form.Check custom type="checkbox" id="checkHelper" />
                  </Col>
                  <Col>
                    <span className="font-weight-bold">
                      Helper for disabled
                    </span>
                  </Col>
                </Row>

                <Form.Label>
                  The width of the corridors in the room is at least 91 cm.
                </Form.Label>
              </Form.Group>

              <Form.Group controlId="controlSelectComfort">
                <Form.Label className="mb-0">
                  <h4>Comfort</h4>
                </Form.Label>
                <Form.Control as="select">
                  <option>Comfort</option>
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                </Form.Control>
              </Form.Group>
            </Form>
          </Col>
          <Col className="col-12 col-md-9 col pt-3">
            <Row>
              <Col>
                <h3>The numbers we have selected for you</h3>
              </Col>
            </Row>
            <Row>
              <Col>
                <CardColumns className="d-flex flex-wrap justify-content-center">
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
