import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";

import RoomsSidebar from "../components/roomsSidebar/roomsSidebar";
import RoomsContent from "../components/roomsContent/roomsContent";

function RoomsPage(props) {
  const { setCurrentRoom, allRooms, reserveData, handleChangeDate, handleChangeGuestsCount } = props;

  const [pageInfo, setPageInfo] = useState({
    currentPage: 1,
    perPage: 6,
    rooms: allRooms,
  });

  const [filters, setFilters] = useState({
    price: { minRange: 100, maxRange: 1000, minPrice: 100, maxPrice: 1000 },
  });

  const setNewRangePrice = (newRange, type) => {
    setFilters((prev) => ({
      ...prev,
      price: { ...prev.price, [type]: newRange },
    }));
  };

  const setMinRangePrice = (newRange) => {
    setNewRangePrice(newRange, "minRange");
  };

  const setMaxRangePrice = (newRange) => {
    setNewRangePrice(newRange, "maxRange");
  };

  const startIndex = Math.floor((pageInfo.currentPage - 1) * pageInfo.perPage);
  const rooms = pageInfo.rooms.slice(startIndex, startIndex + pageInfo.perPage);

  return (
    <>
      <Container>
        <Row>
          <Col className="rooms--sideBar col-12 col-md-5 col-lg-3 col pt-3">
            <RoomsSidebar
              filters={filters}
              setMinRangePrice={setMinRangePrice}
              setMaxRangePrice={setMaxRangePrice}
              reserveData={reserveData}
              handleChangeGuestsCount={handleChangeGuestsCount}
              handleChangeDate={handleChangeDate}
            />
          </Col>
          <Col className="rooms--content col-12 col-md-7 col-lg-9 col pt-3 px-sm-0">
            <RoomsContent
              rooms={rooms}
              setCurrentRoom={setCurrentRoom}
              pageInfo={pageInfo}
              setPageInfo={setPageInfo}
            />
          </Col>
        </Row>
      </Container>
    </>
  );
}
export default RoomsPage;
