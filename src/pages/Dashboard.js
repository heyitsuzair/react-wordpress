import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Spinner from "../components/Spinner";
import { wpposts } from "../utils/api";

export default function Dashboard() {
  const navigate = useNavigate();

  const [data, setData] = useState({
    title: "",
    content: "",
    token: "",
    postCreated: false,
    loading: false,
    message: "",
  });

  const formData = {
    title: data.title,
    content: data.content,
    status: "publish",
  };

  const handleCreatePost = async (e) => {
    e.preventDefault();
    setData({ ...data, loading: true });
    try {
      const response = await axios.post(wpposts, formData, {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + data.token,
        },
      });
      setData({
        ...data,
        loading: false,
        postCreated: true,
        message: response.statusText,
      });
    } catch (error) {
      console.warn(error);
      setData({
        ...data,
        loading: false,
        postCreated: false,
        message: error.response.data.message,
      });
    }
  };

  const handleInputChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    if (!localStorage.getItem("wordpress-user")) {
      navigate("/login");
    }

    const user = JSON.parse(localStorage.getItem("wordpress-user"));
    setData({ ...data, token: user.token });
    //eslint-disable-next-line
  }, [localStorage.getItem("wordpress-user")]);

  const { title, content, loading, message, postCreated } = data;

  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <div className="mx-5 my-5">
          {message && (
            <div
              className={`alert alert-${postCreated ? "success" : "danger"}`}
            >
              {message}
            </div>
          )}
          <h1>Create Post</h1>
          <form onSubmit={handleCreatePost}>
            <div className="mb-3">
              <label htmlFor="exampleInputTitle1" className="form-label">
                Title
              </label>
              <input
                type="text"
                className="form-control"
                id="exampleInputtitle1"
                aria-describedby="titleHelp"
                name="title"
                onChange={handleInputChange}
                value={title}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">
                Content
              </label>
              <textarea
                name="content"
                id="content"
                className="form-control"
                cols="30"
                rows="10"
                onChange={handleInputChange}
                value={content}
              ></textarea>
            </div>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
      )}
    </>
  );
}
