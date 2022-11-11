import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Spinner from "../components/Spinner";
import { login } from "../utils/api";

export default function Login() {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    username: "",
    password: "",
    userNiceName: "",
    userEmail: "",
    loggedIn: false,
    loading: false,
    error: "",
  });

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    setUser({ ...user, loading: true });
    const loginData = {
      username: user.username,
      password: user.password,
    };
    try {
      const { data } = await axios.post(login, loginData);
      setUser({ ...user, loading: false });
      if (data.token === undefined) {
        setUser({ ...user, loading: false, error: data.message });
        return;
      }
      localStorage.setItem("wordpress-user", JSON.stringify(data));
      setUser({
        loading: false,
        token: data.token,
        userEmail: data.user_email,
        userNiceName: data.user_nicename,
        loggedIn: true,
      });
    } catch (error) {
      console.log(error.response.data.message);
      setUser({ ...user, error: error.response.data.message });
    }
  };

  const handleOnChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const { username, password, loading, loggedIn } = user;

  useEffect(() => {
    if (loggedIn || localStorage.getItem("wordpress-user")) {
      navigate("/dashboard");
    }
    //eslint-disable-next-line
  }, [user]);

  return (
    <div>
      {loading === true ? (
        <Spinner />
      ) : (
        <>
          <form onSubmit={handleLoginSubmit} className="mx-4 mt-4">
            <div className="mb-3">
              <label htmlFor="exampleInputUsername1" className="form-label">
                Username
              </label>
              <input
                type="text"
                className="form-control"
                id="exampleInputUsername1"
                aria-describedby="usernameHelp"
                value={username}
                onChange={(e) => handleOnChange(e)}
                name="username"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                id="exampleInputPassword1"
                value={password}
                name="password"
                onChange={(e) => handleOnChange(e)}
              />
            </div>

            <button type="submit" className="btn btn-primary">
              Login
            </button>
          </form>
        </>
      )}
    </div>
  );
}
