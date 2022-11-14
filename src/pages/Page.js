import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Pagination from "../components/Pagination";
import Posts from "../components/Posts";

export default function Page({ totalPages, setTotalPages }) {
  const { pageNo } = useParams();

  return (
    <div>
      <Posts pageNo={pageNo} setTotalPages={setTotalPages} />
      <Pagination totalPages={totalPages} />
    </div>
  );
}
