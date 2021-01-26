import React, { useState } from "react";
import {
  Container,
  Row,
  Col,
  CardColumns,
  Form,
  Button,
} from "react-bootstrap";
import CardRoom from "../components/cardRoom/cardRoom";
import DatePicker from "react-datepicker";
import CustomRange from "../components/customRange/customRange";
import SelectGuests from "../components/selectGuests/selectGuests";
import SelectComfort from "../components/selectComfort/selectComfort";
import Paginator from "../components/paginator/paginator";

export default function RoomsPage(props) {
  const { currentRoom, setCurrentRoom, allRooms } = props;

  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  const [minRange, setMinRange] = useState(100);
  const [maxRange, setMaxRange] = useState(1000);

  const [minPrice, setMinPrice] = useState(minRange);
  const [maxPrice, setMaxPrice] = useState(maxRange);

  const [pageInfo, setPageInfo] = useState({
    currentPage: 1,
    perPage: 6,
    rooms: allRooms,
  });

  const startIndex = (pageInfo.currentPage - 1) * pageInfo.perPage;
  const rooms = pageInfo.rooms.slice(startIndex, startIndex + pageInfo.perPage);

  return (
    <>
      <Container>
        <Button
          onClick={() => {
            console.log(currentRoom);
          }}
        />
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
                      <div
                        key={room.number}
                        onClick={() => {
                          setCurrentRoom(room.number);
                          console.log(room.number);
                          // document.location = "/room";
                        }}
                      >
                        <CardRoom
                          number={room.number}
                          price={room.price}
                          rating={room.rating}
                          reviews={room.reviews}
                        />
                      </div>
                    );
                  })}
                </CardColumns>
                <div className="rooms--paginatorContainer d-flex justify-content-center">
                  <Paginator
                    currentPage={pageInfo.currentPage}
                    perPage={pageInfo.perPage}
                    changePage={(pageNumber) =>
                      setPageInfo({ ...pageInfo, currentPage: pageNumber })
                    }
                    elementsLength={pageInfo.rooms.length}
                  />
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
}
