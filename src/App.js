import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SinglePost from "./pages/SinglePost";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="post/:id" element={<SinglePost />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
