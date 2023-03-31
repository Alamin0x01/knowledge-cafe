import React from "react";

const Header = () => {
  return (
    <div>
      <nav className="navbar navbar-light bg-success p-2  bg-opacity-10  justify-content-between rounded-pill">
        <h1 className="navbar-brand fw-bold">
          <strong className="text-success">Knowledge</strong> Cafe
        </h1>
        <div>
          <img
            src="https://avatars.githubusercontent.com/u/498852?v=4"
            width="50"
            alt=""
          />
        </div>
      </nav>
    </div>
  );
};

export default Header;
