import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";

const SideBookmark = () => {
  const [time, setTime] = useState([]);

  useEffect(() => {
    const getReadTimeFromStorage = localStorage.getItem("readTime");
    setTime(getReadTimeFromStorage);
  });
  const handleComplete = () => {
    toast("Wow so easy !");
  };

  return (
    <div>
      <h4 className="text-primary p-3 border rounded bg-danger bg-opacity-10">
        Spent time on read : {time} min
      </h4>

      <div className="mt-5 p-3 border rounded bg-info bg-opacity-10">
        <h4>Bookmarked Blogs : 8</h4>
        <div>
          <p className="mt-5 p-3 border rounded bg-white">hello</p>
        </div>
      </div>
    </div>
  );
};

export default SideBookmark;
