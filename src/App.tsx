import { BrowserRouter, Routes, Route } from "react-router-dom";
import Test from "./pages/Test";
import Home from "./pages/HomePage/Home";
import Navbar from "./components/Navbar/Navbar";
import "./App.css"
import AboutPage from "./pages/AboutPage/AboutPage";

function App() {

  return (

    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/test" element={<Test />} />
      </Routes>
    </BrowserRouter >
  )
}

export default App;
