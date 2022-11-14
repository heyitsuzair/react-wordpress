import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SinglePost from "./pages/SinglePost";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Blogs from "./pages/Blogs";
import Page from "./pages/Page";
import { useState } from "react";

function App() {
  const [totalPages, setTotalPages] = useState(1);

  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="post/:id" element={<SinglePost />} />
          <Route path="login" element={<Login />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route
            path="blogs"
            element={
              <Blogs totalPages={totalPages} setTotalPages={setTotalPages} />
            }
          />
          <Route
            path="page/:pageNo"
            element={
              <Page totalPages={totalPages} setTotalPages={setTotalPages} />
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
