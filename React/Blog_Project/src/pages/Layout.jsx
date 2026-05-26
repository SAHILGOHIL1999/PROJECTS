import Home from "./Home";
import Error from "./Error";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AboutUs from "./AboutUs";
import Blog from "./Blog";

const Layout = () => {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/aboutus" element={<AboutUs/>}/>
        <Route path="/blog" element={<Blog/>}/>
        <Route path="*" element={<Error/>}/>
      </Routes>
      <Footer/>
    </Router>
  )
}

export default Layout
