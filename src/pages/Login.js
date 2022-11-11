import React, { useState } from "react";

export default function Login() {
  const [user, setUser] = useState({
    username: "",
    password: "",
    userNiceName: "",
    userEmail: "",
    loggedIn: false,
    loading: false,
    error: "",
  });

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    console.log("hello");
  };

  const handleOnChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const { username, password } = user;

  return (
    <div>
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
    </div>
  );
}
