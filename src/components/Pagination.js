import React from "react";
import ReactPaginate from "react-paginate";
import { useLocation, useNavigate } from "react-router-dom";
export default function Pagination({
  currentPage,
  setCurrentPage,
  totalPages,
}) {
  const navigate = useNavigate();

  const handlePageClick = (e) => {
    navigate("/page/" + parseInt(e.selected + 1));
  };

  const location = useLocation();

  let initialPage = 0;

  if (location.pathname !== "/blogs") {
    initialPage = parseInt(location.pathname.split("/")[2] - 1);
  }

  return (
    <div>
      <ReactPaginate
        breakLabel="..."
        nextLabel="Next >"
        onPageChange={(e) => handlePageClick(e)}
        pageCount={totalPages}
        previousLabel="< Previous"
        initialPage={initialPage}
        renderOnZeroPageCount={null}
        pageRangeDisplayed={1}
        activeClassName="selected rounded bg-info text-center text-light"
        containerClassName="pagination-container"
        previousClassName="rounded previous"
        nextClassName="rounded next"
      />
    </div>
  );
}
