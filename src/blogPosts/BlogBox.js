import React from "react";
import "./BlogBox.css";

function BlogBox({ src, date, title, description, author }) {
  return (
    <div className="blogBox">
      <img src={src} alt="" />
      <div className="description">
        <h4 className="date-title">{date}</h4>
        <h4 className="title-blg">{title}</h4>
        <p className="descript">{description}</p>
        <p className="author">{author}</p>
      </div>
    </div>
  );
}

export default BlogBox;
