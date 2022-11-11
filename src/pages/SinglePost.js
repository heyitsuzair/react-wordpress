import React, { useEffect, useState } from "react";
import axios from "axios";
import { getPosts } from "../utils/api";
import { Interweave } from "interweave";
import Moment from "react-moment";
import Spinner from "../components/Spinner";
import { useParams } from "react-router-dom";
export default function SinglePost() {
  const [loading, setLoading] = useState(true);
  const [post, setPost] = useState();
  const [error, setError] = useState("");
  const { id } = useParams();

  const fetchPost = async () => {
    try {
      const { data } = await axios.get(getPosts + `/${id}`);
      setPost(data);
      setLoading(false);
    } catch (error) {
      console.warn(error.response.data.message);
      setError(error.response.data.message);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPost();
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
            <div key={post.id} className="card border-dark mx-auto mb-3 w-50">
              <div className="card-header">{post.title.rendered}</div>
              <div className="card-body">
                <div className="card-text post-content">
                  <Interweave content={post.content.rendered} />
                </div>
              </div>
              <div className="card-footer d-flex flex-column gap-3">
                <Moment fromNow>{post.date}</Moment>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}
