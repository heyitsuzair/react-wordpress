import React from "react";
import { Link, useNavigate } from "react-router-dom";
export default function Navbar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("wordpress-user");
    navigate("/login");
  };

  return (
    <nav className="navbar navbar-expand-lg bg-dark">
      <div className="container-fluid">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link
                className="nav-link text-light active"
                aria-current="page"
                to="/"
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link text-light"
                aria-current="page"
                to="/blogs"
              >
                Blogs
              </Link>
            </li>
            <li className="nav-item">
              {localStorage.getItem("wordpress-user") ? (
                <div className="d-flex align-items-center">
                  <Link
                    className="nav-link text-light active"
                    aria-current="page"
                    to={"/dashboard"}
                  >
                    Dashboard
                  </Link>
                  <div
                    className="nav-link text-light active"
                    aria-current="page"
                    onClick={handleLogout}
                    style={{ cursor: "pointer" }}
                  >
                    Logout
                  </div>
                </div>
              ) : (
                <Link
                  className="nav-link text-light active"
                  aria-current="page"
                  to="/login"
                >
                  Login
                </Link>
              )}
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
