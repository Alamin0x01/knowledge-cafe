import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark } from "@fortawesome/free-solid-svg-icons";
import { ToastContainer, toast } from "react-toastify";

// import Blogs from "../Blogs/Blogs";

const SingleCard = ({ blog, handleReadTime }) => {
  // console.log(blogs);
  // const [mark, setMark] = useState([]);
  // const markAsRead = blog.markAsRead;
  // const markAsRead = (Blogs) => {
  //   const newMark = [...mark, blog];
  //   setMark(newMark);
  // };

  const handleReadTimey = () => {
    toast("Wow so easy !");
  };

  return (
    <div className=" card text-center w-100 m-auto col-md-6">
      <div className=" w-50% m-auto">
        <img className="card-img-top " src={blog.poster} alt="" />
      </div>
      <h3>{blog.blogName}</h3>
      <p>{blog.description}</p>
      <div className=" d-flex justify-content-around ">
        <div className=" d-flex justify-content-around ">
          <div>
            <img
              role="button"
              width="50"
              className=""
              src={blog.picture}
              alt=""
            />
          </div>
          <div>
            <p className="p-1">
              <strong>{blog.name}</strong>
              <br />

              {blog.date}
            </p>
            {/* <p>{blog.date}</p> */}
          </div>
        </div>
        <div className="d-flex gap-2">
          <p>{blog.readTime} min read</p>

          <FontAwesomeIcon
            icon={faBookmark}
            role="button"
            size="2x"
            className="fa-solid"
            onClick={() => markAsRead(blog)}
          />
        </div>
      </div>

      <figure>
        <blockquote className="blockquote">
          <a
            role="button"
            className="fw-bold fs-4 text-start text-decoration-none text-primary-emphasis"
          >
            {blog.title}
          </a>
        </blockquote>
        <figcaption className="blockquote-footer">
          #technology #programming
        </figcaption>
      </figure>
      <a
        role="button"
        onClick={() => handleReadTime(blog.readTime)}
        className=" w-75 m-auto"
      >
        Mark as read
      </a>
    </div>
  );
};

export default SingleCard;
