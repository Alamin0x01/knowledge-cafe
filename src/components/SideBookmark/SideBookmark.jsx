import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";

const SideBookmark = ({ readTime }) => {
  const [time, setTime] = useState(readTime);

  const [breakTime, setBreakTime] = useState(0);

  useEffect(() => {
    const getWatchTimeFromStorage = localStorage.getItem("readTime");
    setTime(getWatchTimeFromStorage);
    const getBreakTime = localStorage.getItem("breakTime");
    setBreakTime(getBreakTime);
  }, [readTime]);

  const handleBreakTime = (bt) => {
    localStorage.setItem("breakTime", bt);
    setBreakTime(bt);
  };
  const handleComplete = () => {
    toast("Wow so easy !");
  };

  return (
    <div>
      <h4 className="text-primary p-3 border bg-danger bg-opacity-10">
        Spent time on read : {time} min
      </h4>

      <div className="mt-5 p-3 border bg-info bg-opacity-10">
        <h4>Bookmarked Blogs : 8</h4>
        <div>
          <p className="mt-5 p-3 border bg-white">hello</p>
        </div>
      </div>

      <button onClick={handleComplete} className="mt-5 btn btn-info w-100">
        Complete
      </button>
    </div>
  );
};

export default SideBookmark;
