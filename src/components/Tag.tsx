import React, { FC } from "react";

interface TagProps {
  tags: string;
}
const Tag: FC<TagProps> = ({ tags }) => {
  return (
    <div className="house__tags_container">
      <p className="house__tags_container--tag">{tags}</p>
    </div>
  );
};

export default Tag;
