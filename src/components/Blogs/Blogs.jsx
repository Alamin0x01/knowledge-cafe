import React from "react";
import "./Blogs.css";

const Blogs = () => {
  return (
    <div>
      <div class="container" className="mt-5">
        <h1>Frequently Asked Questions</h1>
        <details>
          <summary>How do I create accordion?</summary>
          <div>
            The tags <em>details</em> and <em>summary</em> have you covered.
          </div>
          <summary>How do I create accordion?</summary>
          <div>
            The tags <em>details</em> and <em>summary</em> have you covered.
          </div>
        </details>
      </div>
    </div>
  );
};

export default Blogs;
