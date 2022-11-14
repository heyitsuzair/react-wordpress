import React from "react";
import { useParams } from "react-router-dom";
import Posts from "../components/Posts";

export default function Page() {
  const { pageNo } = useParams();

  return (
    <div>
      <Posts pageNo={pageNo} />
    </div>
  );
}
