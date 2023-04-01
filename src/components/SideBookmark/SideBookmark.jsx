import React, { useEffect, useState } from "react";
import BookmarkList from "../BookmarkList/BookmarkList";

const SideBookmark = ({ readTime }) => {
  const [time, setTime] = useState(readTime);

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
        Spent time on read :
        <input className="p-0" type="text" value={time} size="1" disabled />
        min
      </h4>

      <BookmarkList></BookmarkList>
    </div>
  );
};

export default SideBookmark;
