import "./App.css";
import Home from "./home/Home";
import Header from "./Header";
import Nav from "./Nav";
import Footer from "./Footer";
import Blog from "./blogPosts/Blog";
import Contact from "./contact/Contact";

function App() {
  return (
    <div>
      <Header />
      <Nav />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
