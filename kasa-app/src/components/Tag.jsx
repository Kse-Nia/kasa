import React from "react";

function Tag({ tags }) {
  return (
    <div className="house__tags_container">
      <p className="house__tags_container--tag">{tags}</p>
    </div>
  );
}

export default Tag;
