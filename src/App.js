import "./App.css";
import Home from "./home/Home";
import Header from "./Header";
import Nav from "./Nav";
import Footer from "./Footer";
import Blog from "./blogPosts/Blog";
import LoginPage from "./login/LoginPage";
import Contact from "./contact/Contact";
import Listings from "./listings/Listings";
import About from "./about/About";
import OurServices from "./ourServices/OurServices";
function App() {
  return (
    <div>
      <Header />
      <Nav />
      <OurServices />
      <Footer />
    </div>
  );
}

export default App;
