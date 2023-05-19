import { BrowserRouter, Routes, Route } from "react-router-dom";
import Blogs from "./pages/Blogs";
import Test from "./pages/Test";
import Home from "./pages/HomePage/Home";
import Navbar from "./components/Navbar/Navbar";
import "./App.css"

function App() {

  return (

    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<Blogs />} />
        <Route path="/test" element={<Test />} />
      </Routes>
    </BrowserRouter >
  )
}

export default App;
