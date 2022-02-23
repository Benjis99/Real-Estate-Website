import React from "react";
import "./CreatePost.css";
import { Button } from "react-bootstrap";

function CreatePost() {
  return (
    <div className="createPost">
      <h1 className="blog-create-title">Create Blog Post</h1>
      <section className="left-sides">
        <input
          type="blog-creater"
          className="blog-name"
          id="exampleFormControlInput1"
          placeholder="First Name"
        ></input>
        <input
          type="blog-creater"
          className="blog-lastName"
          id="exampleFormControlInput1"
          placeholder="Last Name"
        ></input>
      </section>
      <section className="middle-sections">
        <input
          type="title"
          className="blog-title"
          id="exampleFormControlInput1"
          placeholder="Title"
        ></input>
        <input
          type="date"
          className="blog-date"
          id="exampleFormControlInput1"
          placeholder="YYYY-MM-DD"
        ></input>
      </section>
      <section className="right-sides">
        <textarea
          className="blog-document"
          placeholder="Write blog content here"
        ></textarea>
      </section>
      <section className="insert-picture">
        <h1 className="insert-picture-txt">Insert picture</h1>
        <input className="picture-insert" type="file" />
        <Button className="post-blog">Post </Button>
      </section>
    </div>
  );
}

export default CreatePost;
