import React, { useEffect, useState } from "react";
import axios from "axios";
import { getPosts, wpposts } from "../utils/api";
import { Link } from "react-router-dom";
import { Interweave } from "interweave";
import Moment from "react-moment";
import Spinner from "../components/Spinner";
export default function Home() {
  const [loading, setLoading] = useState(true);
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState("");

  const fetchPosts = async () => {
    try {
      const { data } = await axios.get(wpposts);
      setPosts(data);
      console.log(data);
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
      {loading ? (
        <Spinner />
      ) : (
        <>
          {error && <div className="alert alert-danger">{error}</div>}
          <div className="mt-5 post-container">
            {posts.map((post) => {
              return (
                <div
                  key={post.id}
                  className="card border-dark mx-auto mb-3 w-50"
                >
                  <div className="card-header">
                    <Link to={`post/` + post.id}>{post.title.rendered}</Link>
                  </div>
                  <div className="card-body">
                    <div className="card-text post-content">
                      <Interweave content={post.content.rendered} />
                    </div>
                  </div>
                  <div className="card-footer d-flex flex-column gap-3">
                    <Moment fromNow>{post.date}</Moment>
                    <Link to={`post/` + post.id} className="btn btn-info">
                      Read More
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </>
      )}
    </>
  );
}
