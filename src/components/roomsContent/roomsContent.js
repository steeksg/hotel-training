import React from "react";
import { Row, Col, CardColumns } from "react-bootstrap";

import { useHistory } from "react-router-dom";

import CardRoom from "../cardRoom/cardRoom";
import Paginator from "../paginator/paginator";
import "./roomsContent.scss";

export default function RoomsContent({
  rooms,
  setCurrentRoom,
  pageInfo,
  setPageInfo,
}) {
  let history = useHistory();
  const goToRoom = (number) => {
    history.push(`/room/${number}`);
  };

  return (
    <>
      <Row>
        <Col className="rooms--contentTitle">
          <h3>The numbers we have selected for you</h3>
        </Col>
      </Row>
      <Row>
        <Col>
          <CardColumns className="d-flex flex-wrap justify-content-center">
            {rooms.map((room) => {
              return (
                <CardRoom
                  handleClick={() => {
                    setCurrentRoom(room.number);
                    goToRoom(room.number);
                  }}
                  key={room.number}
                  number={room.number}
                  price={room.price.byDay}
                  rating={room.rating}
                  reviews={room.reviews}
                />
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
    </>
  );
}
