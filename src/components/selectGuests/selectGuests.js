import React, { useState, useEffect } from "react";
import { Row, Col, Button } from "react-bootstrap";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown, faAngleUp } from "@fortawesome/free-solid-svg-icons";

import "./selectGuests.scss";

export default function SelectGuests(props) {
  const [value, setValue] = useState("How much guests?");
  const [show, setShow] = useState(false);
  const [countAdult, setCountAdult] = useState(0);
  const [countChildren, setCountChildren] = useState(0);
  const [countBabies, setCountBabies] = useState(0);

  const ContentItem = (props) => {
    const { title, count, setCount } = props;
    return (
      <Row className="selectGuests--contentItem d-flex align-items-center">
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
        className={`selectGuests--counterButton ${
          isDisabled && "selectGuests--counterButton-disabled"
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
        <h4 className="selectGuests--counterValue">{count}</h4>
        <CounterButton
          isDisabled={plusIsDisabled}
          type="+"
          action={() => handleChangeCount(count + 1)}
        />
      </>
    );
  };

  const clearAll = () => {
    setCountAdult(0);
    setCountChildren(0);
    setCountBabies(0);
  };

  const changeValue = () => {
    let text = "";
    text+= !!countAdult && `${countAdult} adult`;
    text+= !!countChildren && `${countChildren} children`;
    text+= !!countBabies && `${countBabies} babies`;
  };

  return (
    <div>
      <div
        className={`form-control selectGuests position-relative ${
          show && "selectGuests-expand"
        }`}
        onClick={() => {
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
              className="selectGuests--input"
            />
          </Col>
          <Col className="col-2 d-flex justify-content-end">
            <div className="selectGuests--toggle">
              <FontAwesomeIcon
                icon={show ? faAngleUp : faAngleDown}
                size="1x"
              />
            </div>
          </Col>
        </Row>
      </div>

      <div
        className={`selectGuests--content ${
          show && "selectGuests--content-show"
        }`}
      >
        <ContentItem
          title="adults"
          count={countAdult}
          setCount={setCountAdult}
        />
        <ContentItem
          title="children"
          count={countChildren}
          setCount={setCountChildren}
        />
        <ContentItem
          title="babies"
          count={countBabies}
          setCount={setCountBabies}
        />

        <Row>
          <Col>
            <Button
              variant="outline-primary"
              className="selectGuests--buttonFooter"
              onClick={() => clearAll()}
            >
              CLEAR
            </Button>
          </Col>
          <Col className="d-flex justify-content-end">
            <Button
              variant="outline-primary"
              className="selectGuests--buttonFooter"
              onClick={() => {
                setShow(false);
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
