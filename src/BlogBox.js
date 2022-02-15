import React from "react";
import "./BlogBox.css";

function BlogBox({ src, title, description, author }) {
  return (
    <div className="blogBox">
      <img src={src} alt="" />
      <div className="description">
        <h4 className="title">{title}</h4>
        <p>{description}</p>
        <p className="author">{author}</p>
      </div>
    </div>
  );
}

export default BlogBox;
