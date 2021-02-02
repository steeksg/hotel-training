import React from "react";
import { Pagination } from "react-bootstrap";

import "./paginator.scss";

export default function Paginator(props) {
  const { currentPage, changePage, elementsLength, perPage } = props;

  const pagesCount = Math.ceil(elementsLength / perPage);

  const changePageHandle = (page) => {
    changePage(page);
    window.scrollTo(0, 0);
  };

  const ContentPaginator = () => {
    if (pagesCount === 1) {
      return <></>;
    } else if (pagesCount === 2) {
      return (
        <Pagination.Item
          onClick={() => {
            changePageHandle(2);
          }}
          active={currentPage === 2 && "active"}
        >
          {2}
        </Pagination.Item>
      );
    } else if (pagesCount === 3) {
      return (
        <>
          <Pagination.Item
            onClick={() => {
              changePageHandle(2);
            }}
            active={currentPage === 2 && "active"}
          >
            {2}
          </Pagination.Item>
          <Pagination.Item
            onClick={() => {
              changePageHandle(3);
            }}
            active={currentPage === 3 && "active"}
          >
            {3}
          </Pagination.Item>
        </>
      );
    } else if (currentPage < 3) {
      return (
        <>
          <Pagination.Item
            onClick={() => {
              changePageHandle(2);
            }}
            active={currentPage === 2 && "active"}
          >
            {2}
          </Pagination.Item>
          <Pagination.Item
            onClick={() => {
              changePageHandle(3);
            }}
            active={currentPage === 3 && "active"}
          >
            {3}
          </Pagination.Item>
          <Pagination.Ellipsis />
        </>
      );
    } else if (pagesCount - currentPage < 2) {
      return (
        <>
          <Pagination.Ellipsis />
          <Pagination.Item
            onClick={() => {
              changePageHandle(pagesCount - 2);
            }}
            active={currentPage === pagesCount - 2 && "active"}
          >
            {pagesCount - 2}
          </Pagination.Item>
          <Pagination.Item
            onClick={() => {
              changePageHandle(pagesCount - 1);
            }}
            active={currentPage === pagesCount - 1 && "active"}
          >
            {pagesCount - 1}
          </Pagination.Item>
        </>
      );
    } else {
      return (
        <>
          <Pagination.Ellipsis className="paginator--spacer" />

          <Pagination.Item
            onClick={() => {
              changePageHandle(currentPage - 1);
            }}
          >
            {currentPage - 1}
          </Pagination.Item>
          <Pagination.Item active>{currentPage}</Pagination.Item>
          <Pagination.Item
            onClick={() => {
              changePageHandle(currentPage + 1);
            }}
          >
            {currentPage + 1}
          </Pagination.Item>

          <Pagination.Ellipsis className="paginator--spacer" />
        </>
      );
    }
  };

  return (
    <div className="d-flex flex-column align-items-center">
      <Pagination>
        {currentPage !== 1 && (
          <Pagination.Prev
            className="paginator--prev"
            onClick={() => {
              changePageHandle(currentPage - 1);
            }}
          />
        )}

        {pagesCount !== 1 && (
          <Pagination.Item
            onClick={() => {
              changePageHandle(1);
            }}
            active={currentPage === 1 && "active"}
          >
            {1}
          </Pagination.Item>
        )}

        <ContentPaginator />

        {pagesCount > 2 && (
          <Pagination.Item
            onClick={() => {
              changePageHandle(pagesCount);
            }}
            active={currentPage === pagesCount && "active"}
          >
            {pagesCount}
          </Pagination.Item>
        )}

        {currentPage !== pagesCount && (
          <Pagination.Next
            className="paginator--next"
            onClick={() => {
              changePageHandle(currentPage + 1);
            }}
          />
        )}
      </Pagination>
      <div>{`${currentPage * perPage - perPage + 1} - ${
        currentPage * perPage < elementsLength
          ? currentPage * perPage
          : elementsLength
      } of ${Math.floor(elementsLength / 10) * 10}+ variants`}</div>
    </div>
  );
}
