import React from "react";
import "./Blogs.css";

const Blogs = () => {
  return (
    <div>
      <div class="container" className="mt-5">
        <h1>Programming Hero- Question Answers</h1>

        <details>
          <summary>How does useState work?</summary>
          <div className="fs-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Non quas
            quos perferendis nam aliquid hic! Sed aliquam necessitatibus
            repudiandae, ea excepturi suscipit, doloribus ipsum expedita omnis
            laboriosam voluptatum beatae deleniti! have you covered.
          </div>
        </details>
        <details>
          <summary>Props vs state?</summary>
          <div className="fs-6">The tags ffffffffffffffave you covered.</div>
        </details>
        <details>
          <summary>Purpose of useEffect other than fetching data.</summary>
          <div className="fs-6">The tags ffffffffffffffave you covered.</div>
        </details>
        <details>
          <summary>How Does React work?</summary>
          <div className="fs-6">The tags ffffffffffffffave you covered.</div>
        </details>
      </div>
    </div>
  );
};

export default Blogs;
