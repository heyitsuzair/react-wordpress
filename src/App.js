import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SinglePost from "./pages/SinglePost";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Blogs from "./pages/Blogs";
import Page from "./pages/Page";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="post/:id" element={<SinglePost />} />
          <Route path="login" element={<Login />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="page/:pageNo" element={<Page />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
