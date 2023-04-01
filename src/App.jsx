import { useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import SideBookmark from "./components/SideBookmark/SideBookmark";
import Blogs from "./components/Blogs/Blogs";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [readTime, setReadTime] = useState([]);

  const handleReadTime = (time) => {
    const previousReadTime = JSON.parse(localStorage.getItem("readTime"));
    if (previousReadTime) {
      const sum = previousReadTime + time;
      localStorage.setItem("readTime", sum);
      setReadTime(sum);
    } else {
      localStorage.setItem("readTime", time);
      setReadTime(time);
    }
  };
  return (
    <div>
      <div className="header  m-auto mb-3 ">
        <Header></Header>
      </div>
      <div className="main row">
        <div className="home-container col-md-8">
          <Home handleReadTime={handleReadTime}></Home>
        </div>
        <div className=" col-md-4 card">
          <SideBookmark readTime={readTime}></SideBookmark>
        </div>
      </div>

      <Blogs></Blogs>
      <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
