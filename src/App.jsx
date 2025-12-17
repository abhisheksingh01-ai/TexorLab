import { Routes, Route } from "react-router-dom";

import Navbar from "./components/navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Home from "./components/home/Home";
import KeyServices from "./components/KeyServices/KeyServices";


export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={< KeyServices />} />
      </Routes>
      <Footer />
    </>
  );
}
