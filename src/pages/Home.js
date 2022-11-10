import React, { useEffect, useState } from "react";
import axios from "axios";
import { getPosts } from "../utils/api";
import { Link } from "react-router-dom";
import { Interweave } from "interweave";
import Moment from "react-moment";
export default function Home() {
  const [loading, setLoading] = useState(true);
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState("");

  const fetchPosts = async () => {
    try {
      const { data } = await axios.get(getPosts);
      setPosts(data);
      console.log(data);
      setLoading(false);
    } catch (error) {
      console.warn(error.response.data);
    }
  };

  useEffect(() => {
    fetchPosts();
    //eslint-disable-next-line
  }, []);

  return (
    <>
      {loading ? (
        <h1>Loading....</h1>
      ) : (
        <div className="mt-5 post-container">
          {posts.map((post) => {
            return (
              <div key={post.id} className="card border-dark mb-3 w-50">
                <div className="card-header">
                  <Link to={`post/` + post.id}>{post.title.rendered}</Link>
                </div>
                <div className="card-body">
                  <div className="card-text post-content">
                    <Interweave content={post.content.rendered} />
                  </div>
                </div>
                <div className="card-footer">
                  <Moment fromNow>{post.date}</Moment>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </>
  );
}
