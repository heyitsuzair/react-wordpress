import axios from "axios";
import React, { useEffect, useState } from "react";
import { fetchBlogPosts } from "../utils/api";
import Spinner from "./Spinner";

export default function Posts({ pageNo }) {
  // Converting String To Integer
  const pageNoInt = parseInt(pageNo);

  const [currentPage, setCurrentPage] = useState(pageNoInt);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [posts, setPosts] = useState([]);

  const fetchPosts = async () => {
    try {
      const { data } = await axios.get(fetchBlogPosts + pageNoInt);
      setPosts(data.posts_data);
      setTotalPages(data.page_count);
      setLoading(false);
    } catch (error) {
      console.warn(error.response.data.message);
      setError(error.response.data.message);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPosts();
    //eslint-disable-next-line
  }, []);

  return (
    <>
      {loading === true ? (
        <Spinner />
      ) : (
        <>{error && <div className="alert alert-danger">{error}</div>}</>
      )}
    </>
  );
}
