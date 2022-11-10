import React, { useEffect, useState } from "react";
import axios from "axios";
import { getPosts } from "../utils/api";

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState("");

  const fetchPosts = async () => {
    try {
      const { data } = await axios.get(getPosts);
      setPosts([...posts, data]);
      setLoading(false);
    } catch (error) {
      console.warn(error.response.data);
    }
  };

  useEffect(() => {
    fetchPosts();
    //eslint-disable-next-line
  }, []);

  return <div></div>;
}
