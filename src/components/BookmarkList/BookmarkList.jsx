import React from "react";

const BookmarkList = () => {
  return (
    <div>
      <div className="mt-5 p-3 border rounded bg-info bg-opacity-10">
        <h4>Bookmarked Blogs : 8</h4>
        <div>
          <p className="mt-5 p-3 border rounded bg-white">
            Groundbreaking research reveals potential of gene editing technology
            for curing genetic diseases...
          </p>
          <p className="mt-5 p-3 border rounded bg-white">
            New study finds link between social media use and increased feelings
            of loneliness...
          </p>
          <p className="mt-5 p-3 border rounded bg-white">
            Survey shows that remote work has become the new normal for tech
            industry during the pandemic...
          </p>
          <p className="mt-5 p-3 border rounded bg-white">
            Emerging blockchain technology poised to revolutionize the way
            businesses operate..
          </p>
        </div>
      </div>
    </div>
  );
};

export default BookmarkList;
