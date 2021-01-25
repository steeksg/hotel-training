import React, { useState } from "react";
import {
  Container,
  Row,
  Col,
  CardColumns,
  Form,
  Pagination,
} from "react-bootstrap";
import CardRoom from "../components/cardRoom/cardRoom";
import DatePicker from "react-datepicker";
import CustomRange from "../components/customRange/customRange";
import SelectGuests from "../components/selectGuests/selectGuests";
import SelectComfort from "../components/selectComfort/selectComfort";

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
  const [endDate, setEndDate] = useState(null);

  const [minRange, setMinRange] = useState(100);
  const [maxRange, setMaxRange] = useState(1000);

  const [minPrice, setMinPrice] = useState(minRange);
  const [maxPrice, setMaxPrice] = useState(maxRange);

  const [pageInfo, setPageInfo] = useState({
    currentPage: 1,
    perPage: 3,
    rooms: testData,
  });
  // const [rooms, setRooms] = useState(testData)

  const startIndex = (pageInfo.currentPage - 1) * pageInfo.perPage;
  const rooms = pageInfo.rooms.slice(startIndex, startIndex + pageInfo.perPage);

  const changePage = (pageNumber) => {
    setPageInfo({ ...pageInfo, currentPage: pageNumber });
  };

  return (
    <>
      <Container>
        <Row>
          <Col className="col-12 col-md-3 col pt-3">
            <Form>
              <Form.Group controlId="controlDateOfStay">
                <h4>dates of stay</h4>
                <DatePicker
                  selected={startDate}
                  placeholderText="DD.MM.YYYY"
                  dateFormat="dd.MM.yyyy"
                  onChange={(date) => setStartDate(date)}
                  startDate={startDate}
                  endDate={endDate}
                  minDate={new Date()}
                />
              </Form.Group>

              <Form.Group controlId="controlSelectCountGuests">
                <Form.Label className="mb-0">
                  <h4>guests</h4>
                </Form.Label>
                <SelectGuests />
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
                <SelectComfort />
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
                  {rooms.map((room) => {
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
                <Pagination>
                  <Pagination.First
                    onClick={() => {
                      changePage(1);
                    }}
                  />
                  <Pagination.Prev
                    onClick={() => {
                      changePage(pageInfo.currentPage - 1);
                    }}
                  />
                  <Pagination.Item href="/room">{1}</Pagination.Item>
                  <Pagination.Ellipsis />

                  <Pagination.Item>{10}</Pagination.Item>
                  <Pagination.Item>{11}</Pagination.Item>
                  <Pagination.Item active>{12}</Pagination.Item>
                  <Pagination.Item>{13}</Pagination.Item>
                  <Pagination.Item>{14}</Pagination.Item>

                  <Pagination.Ellipsis />
                  <Pagination.Item>{20}</Pagination.Item>
                  <Pagination.Next
                    onClick={() => {
                      changePage(pageInfo.currentPage + 1);
                    }}
                  />
                  <Pagination.Last
                    onClick={() => {
                      changePage(pageInfo.rooms.length / pageInfo.perPage);
                    }}
                  />
                </Pagination>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
}
