import React, { useState, useEffect } from "react";
import { Row, Col, Button } from "react-bootstrap";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown, faAngleUp } from "@fortawesome/free-solid-svg-icons";

import "./selectComfort.scss";

export default function SelectComfort(props) {
  const [value, setValue] = useState("Optional");
  const [show, setShow] = useState(false);
  const [countBedrooms, setCountBedrooms] = useState(0);
  const [countBed, setCountBed] = useState(0);
  const [countBathrooms, setCountBathrooms] = useState(0);

  // useEffect(() => {
  //   let countAllGuests = countBedrooms + countBed + countBathrooms;

  //   setValue(
  //     !!countAllGuests
  //       ? `${countBedrooms + countBed + countBathrooms} comforts`
  //       : "How much guests?"
  //   );
  // }, [countBedrooms, countBed, countBathrooms]);

  const ContentItem = (props) => {
    const { title, count, setCount } = props;
    return (
      <Row className="selectComfort--contentItem d-flex align-items-center">
        <Col>
          <h4>{title}</h4>
        </Col>
        <Col className="d-flex justify-content-end">
          <Counter count={count} setCount={setCount} />
        </Col>
      </Row>
    );
  };

  const CounterButton = (props) => {
    const { type, isDisabled, action } = props;
    return (
      <div
        onClick={action}
        className={`selectComfort--counterButton ${
          isDisabled && "selectComfort--counterButton-disabled"
        }`}
      >
        {type}
      </div>
    );
  };

  const Counter = (props) => {
    const [minusIsDisabled, setMinusIsDisabled] = useState();
    const [plusIsDisabled, setPlusIsDisabled] = useState();
    const { count, setCount } = props;
    const maxCount = 5; //For example

    useEffect(() => {
      setMinusIsDisabled(count === 0 ? true : false);
      setPlusIsDisabled(count === maxCount ? true : false);
    }, [count]);

    const handleChangeCount = (newCount) => {
      if (newCount <= 0) {
        setCount(0);
      } else {
        setMinusIsDisabled(false);
        if (newCount >= maxCount) {
          setCount(maxCount);
        } else {
          setCount(newCount);
        }
      }
    };

    return (
      <>
        <CounterButton
          isDisabled={minusIsDisabled}
          type="-"
          action={() => handleChangeCount(count - 1)}
        />
        <h4 className="selectComfort--counterValue">{count}</h4>
        <CounterButton
          isDisabled={plusIsDisabled}
          type="+"
          action={() => handleChangeCount(count + 1)}
        />
      </>
    );
  };

  const clearAll = () => {
    setCountBedrooms(0);
    setCountBed(0);
    setCountBathrooms(0);
  };

  return (
    <div>
      <div
        className={`form-control selectComfort position-relative ${
          show && "selectComfort-expand"
        }`}
        onClick={() => {
          setShow(!show);
        }}
        onBlur={() => {
          setShow(!show);
        }}
      >
        <Row>
          <Col className="col-10">
            <input
              readOnly
              type="text"
              // placeholder="How much guests?"
              value={value}
              className="selectComfort--input"
            />
          </Col>
          <Col className="col-2 d-flex justify-content-end">
            <div className="selectComfort--toggle">
              <FontAwesomeIcon
                icon={show ? faAngleUp : faAngleDown}
                size="1x"
              />
            </div>
          </Col>
        </Row>
      </div>

      <div
        className={`selectComfort--content ${
          show && "selectComfort--content-show"
        }`}
      >
        <ContentItem
          title="bedrooms"
          count={countBedrooms}
          setCount={setCountBedrooms}
        />
        <ContentItem title="bed" count={countBed} setCount={setCountBed} />
        <ContentItem
          title="bathrooms"
          count={countBathrooms}
          setCount={setCountBathrooms}
        />

        <Row>
          <Col>
            <Button
              variant="outline-primary"
              className="selectComfort--buttonFooter"
              onClick={() => clearAll()}
            >
              CLEAR
            </Button>
          </Col>
          <Col className="d-flex justify-content-end">
            <Button
              variant="outline-primary"
              className="selectComfort--buttonFooter"
              onClick={() => {
                setShow(!show);
              }}
            >
              TO APPLY
            </Button>
          </Col>
        </Row>
      </div>
    </div>
  );
}
