import "./App.css";
import Home from "./home/Home";
import Header from "./Header";
import Nav from "./Nav";
import Footer from "./Footer";
import LoginPage from "./login/LoginPage";
import Contact from "./contact/Contact";
import Listings from "./listings/Listings";
import About from "./about/About";
import OurServices from "./ourServices/OurServices";
import Blog from "./blogPosts/Blog";
import CreatePost from "./createPost/CreatePost";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";
function App() {
  return (
    <div className="app">
      <Router>
        <Header />
        <Nav />

        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/listings" element={<Listings />} />
          <Route exact path="/ourServices" element={<OurServices />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/blog" element={<Blog />} />
          <Route exact path="/contact" element={<Contact />} />
          <Route exact path="/loginPage" element={<LoginPage />} />
          <Route exact path="/createPost" element={<CreatePost />} />
        </Routes>

        <Footer />
      </Router>
    </div>
  );
}

export default App;
