import React, { useState, useEffect } from "react";
import { Row, Col, Button } from "react-bootstrap";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown, faAngleUp } from "@fortawesome/free-solid-svg-icons";

import "./customSelect.scss";

export default function CustomSelect(props) {
  const { data, value } = props;
  const [show, setShow] = useState(false);

  const ContentItem = (props) => {
    const { title, count, setCount } = props;
    return (
      <Row className="customSelect--contentItem d-flex align-items-center">
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
        className={`customSelect--counterButton ${
          isDisabled && "customSelect--counterButton-disabled"
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
        <h4 className="customSelect--counterValue">{count}</h4>
        <CounterButton
          isDisabled={plusIsDisabled}
          type="+"
          action={() => handleChangeCount(count + 1)}
        />
      </>
    );
  };

  const clearAll = () => {
    data.map((item) => item.setCount(0));
  };

  return (
    <>
      <div className="position-relative">
        <div
          className={`form-control customSelect ${
            show && "customSelect-expand"
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
                value={value}
                className="customSelect--input"
              />
            </Col>
            <Col className="col-2 d-flex justify-content-end">
              <div className="customSelect--toggle">
                <FontAwesomeIcon
                  icon={show ? faAngleUp : faAngleDown}
                  size="1x"
                />
              </div>
            </Col>
          </Row>
        </div>
        <div
          className={`customSelect--content ${
            show && "customSelect--content-show"
          }`}
        >
          {data.map((item) => {
            return (
              <ContentItem
                key={item.name}
                title={item.name}
                count={item.count}
                setCount={item.setCount}
              />
            );
          })}

          <Row>
            <Col>
              <Button
                variant="outline-primary"
                className="customSelect--buttonFooter"
                onClick={() => clearAll()}
              >
                CLEAR
              </Button>
            </Col>
            <Col className="d-flex justify-content-end">
              <Button
                variant="outline-primary"
                className="customSelect--buttonFooter"
                onClick={() => {
                  setShow(!show);
                }}
              >
                APPLY
              </Button>
            </Col>
          </Row>
        </div>
      </div>
      <div
        className={`customSelect--backgroundForBlur ${
          show && "customSelect--backgroundForBlur-show"
        }`}
        onClick={() => {
          setShow(!show);
        }}
      ></div>
    </>
  );
}
