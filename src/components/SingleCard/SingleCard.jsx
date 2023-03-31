import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

const SingleCard = ({ movie, handleWatchTime }) => {
  //   console.log(movie);
  return (
    <div className=" card text-center w-100 m-auto col-md-6">
      <div className=" w-50% m-auto">
        <img className="card-img-top " src={movie.poster} alt="" />
      </div>
      <h3>{movie.movieName}</h3>
      <p>{movie.description}</p>
      <div className=" d-flex justify-content-around ">
        <div className=" d-flex justify-content-around ">
          <div>
            <img
              role="button"
              width="50"
              className=""
              src={movie.picture}
              alt=""
            />
          </div>
          <div className="p-0">
            <p className="fw-bold">{movie.name}</p>
            <p>{movie.date}</p>
          </div>
        </div>
        <div className="d-flex gap-2">
          <p>{movie.readTime} min read</p>
          {/* <FontAwesomeIcon icon={faBookmark} /> */}
          <FontAwesomeIcon icon={faShoppingCart} role="button" />
        </div>
      </div>
      {/* <h2 role="button">{movie.title}</h2> */}
      <figure>
        <blockquote class="blockquote">
          <p role="button" className="fs-3">
            {movie.title}
          </p>
        </blockquote>
        <figcaption class="blockquote-footer">
          #technology <cite title="Source Title">#programming</cite>
        </figcaption>
      </figure>
      <a
        role="button"
        onClick={() => handleWatchTime(movie.watchTime)}
        className=" w-75 m-auto"
      >
        Mark as read
      </a>
    </div>
  );
};

export default SingleCard;
