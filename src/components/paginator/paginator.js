import React from "react";
import { Pagination } from "react-bootstrap";

import "./paginator.scss";

export default function Paginator(props) {
  const { currentPage, changePage, elementsLength, perPage } = props;

  const pagesCount = Math.ceil(elementsLength / perPage);

  const ContentPaginator = () => {
    if (currentPage < 3) {
      return (
        <>
          <Pagination.Item
            onClick={() => {
              changePage(2);
            }}
            active={currentPage === 2 && "active"}
          >
            {2}
          </Pagination.Item>
          <Pagination.Item
            onClick={() => {
              changePage(3);
            }}
            active={currentPage === 3 && "active"}
          >
            {3}
          </Pagination.Item>
          <Pagination.Ellipsis />
        </>
      );
    } else if (pagesCount - currentPage < 3) {
      return (
        <>
          <Pagination.Ellipsis />
          <Pagination.Item
            onClick={() => {
              changePage(pagesCount - 2);
            }}
            active={currentPage === pagesCount - 2 && "active"}
          >
            {pagesCount - 2}
          </Pagination.Item>
          <Pagination.Item
            onClick={() => {
              changePage(pagesCount - 1);
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
          <Pagination.Ellipsis />

          <Pagination.Item
            onClick={() => {
              changePage(currentPage - 1);
            }}
          >
            {currentPage - 1}
          </Pagination.Item>
          <Pagination.Item active>{currentPage}</Pagination.Item>
          <Pagination.Item
            onClick={() => {
              changePage(currentPage + 1);
            }}
          >
            {currentPage + 1}
          </Pagination.Item>

          <Pagination.Ellipsis />
        </>
      );
    }
  };

  return (
    <>
      <Pagination>
        {currentPage !== 1 && (
          <Pagination.Prev
            className="paginator--prev"
            onClick={() => {
              changePage(currentPage - 1);
            }}
          />
        )}

        <Pagination.Item
          onClick={() => {
            changePage(1);
          }}
          active={currentPage === 1 && "active"}
        >
          {1}
        </Pagination.Item>

        <ContentPaginator />

        <Pagination.Item
          onClick={() => {
            changePage(pagesCount);
          }}
          active={currentPage === pagesCount && "active"}
        >
          {pagesCount}
        </Pagination.Item>

        {currentPage !== pagesCount && (
          <Pagination.Next
            className="paginator--next"
            onClick={() => {
              changePage(currentPage + 1);
            }}
          />
        )}
      </Pagination>
    </>
  );
}
