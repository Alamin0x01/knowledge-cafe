import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import SingleCard from "../SingleCard/SingleCard";

const Home = ({ handleReadTime }) => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);

  return (
    <div>
      <div className="blog-container row ">
        {blogs.map((blog) => (
          <SingleCard
            handleReadTime={handleReadTime}
            key={blog.id}
            blog={blog}
          ></SingleCard>
        ))}
      </div>
      <div></div>
    </div>
  );
};

export default Home;
