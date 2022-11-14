import axios from "axios";
import React, { useEffect, useState } from "react";
import { fetchBlogPosts } from "../utils/api";
import Post from "./Post";
import Spinner from "./Spinner";

export default function Posts({ pageNo, setTotalPages }) {
  // Converting String To Integer
  const pageNoInt = parseInt(pageNo);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [posts, setPosts] = useState([]);

  const fetchPosts = async () => {
    setLoading(true);
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
  }, [pageNo]);

  return (
    <>
      {loading === true ? (
        <Spinner />
      ) : (
        <>
          {error && <div className="alert alert-danger">{error}</div>}
          {posts.map((postItem) => {
            return (
              <div key={postItem.id}>
                <Post postItem={postItem} />
              </div>
            );
          })}
        </>
      )}
    </>
  );
}
