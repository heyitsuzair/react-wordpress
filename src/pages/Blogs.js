import React from "react";
import Posts from "../components/Posts";
import Pagination from "../components/Pagination";

export default function Blogs({ totalPages, setTotalPages }) {
  return (
    <div className="container">
      <Posts pageNo="1" totalPages={totalPages} setTotalPages={setTotalPages} />
      <Pagination totalPages={totalPages} />
    </div>
  );
}
