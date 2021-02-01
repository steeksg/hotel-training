import React from "react";
import { Row, Col, Form } from "react-bootstrap";

import CustomRange from "../customRange/customRange";
import SelectGuests from "../selectGuests/selectGuests";
import SelectComfort from "../selectComfort/selectComfort";
import CustomDatepicker2 from "../customDatepicker2/customDatepicker2";

import "./roomsSidebar.scss";

export default function RoomsSidebar({
  filters,
  setMinRangePrice,
  setMaxRangePrice,
  reserveData,
  handleChangeDate,
  handleChangeGuestsCount,
}) {
  return (
    <Form>
      <Form.Group controlId="controlDateOfStay">
        <CustomDatepicker2
          setDates={handleChangeDate}
          dates={reserveData.dates}
          type="rangeSingle"
        />
      </Form.Group>

      <Form.Group controlId="controlSelectCountGuests">
        <Form.Label className="mb-0">
          <h4>guests</h4>
        </Form.Label>
        <SelectGuests
          guests={reserveData.guests}
          changeCountGuests={handleChangeGuestsCount}
        />
      </Form.Group>

      <Form.Group controlId="controlRangePrice">
        <Form.Label className="mb-0 d-flex justify-content-between mb-2">
          <h4>Range price</h4>
          {`${filters.price.minRange}$ - ${filters.price.maxRange}$`}
        </Form.Label>
        <CustomRange
          min={filters.price.minPrice}
          max={filters.price.maxPrice}
          valueLeft={filters.price.minRange}
          valueRight={filters.price.maxRange}
          setLeft={setMinRangePrice}
          setRight={setMaxRangePrice}
        />
        <Form.Label className="mb-0 d-flex justify-content-between mt-2">
          Price per night stay in the room.
        </Form.Label>
      </Form.Group>

      <Form.Group controlId="controlRules">
        <Form.Label className="mb-0 d-flex justify-content-between">
          <h4>Rules</h4>
        </Form.Label>
        <Form.Check custom type="checkbox" label="Can smoke" id="checkSmoke" />
        <Form.Check custom type="checkbox" label="With pets" id="checkPets" />
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
            <span className="font-weight-bold">Helper for disabled</span>
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
  );
}
