import React, { useEffect, useState } from "react";
import BookmarkList from "../BookmarkList/BookmarkList";

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
      <BookmarkList></BookmarkList>
    </div>
  );
};

export default SideBookmark;
