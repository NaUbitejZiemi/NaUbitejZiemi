import "./App.css";
import { Routes, Route } from "react-router-dom";
import About from "routes/About";
import Gallery from "routes/Gallery";
import Home from "routes/Home";
import Navbar from "components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/gallery" element={<Gallery />} />
      </Routes>
    </>
  );
}

export default App;
