import "./App.css";
import Home from "./home/Home";
import Header from "./Header";
import Nav from "./Nav";
import Footer from "./Footer";
import Blog from "./blogPosts/Blog";
import LoginPage from "./LoginPage";

function App() {
  return (
    <div>
      <Header />
      <Nav />
      <LoginPage />
      <Footer />
    </div>
  );
}

export default App;
