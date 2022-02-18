import "./App.css";
import Home from "./home/Home";
import Header from "./Header";
import Nav from "./Nav";
import Footer from "./Footer";
import Blog from "./blogPosts/Blog";
import LoginPage from "./LoginPage";
import Contact from "./contact/Contact";
import Listings from "./listings/Listings";

function App() {
  return (
    <div>
      <Header />
      <Nav />
      <Blog />
      <Footer />
    </div>
  );
}

export default App;
