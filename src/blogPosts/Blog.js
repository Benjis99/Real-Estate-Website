import React from "react";
import "./Blog.css";
import BlogBox from "./BlogBox";
import PictureTextBox from "./pictureTextBox";
import host from "../pictures/host.jpg";
import group from "../pictures/group.jpg";
import manWalking from "../pictures/manwalking.jpg";
import house from "../pictures/house.jpg";
import DropDowns from "./DropDowns";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function Blog() {
  const history = useNavigate();
  return (
    <div className="blog">
      <div className="recentPost">
        <PictureTextBox
          postTitle="Recent posts"
          date="10 FEBRUARY 2022 16:50"
          title="POST TITLE"
          line="​​━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "
          secondDescription="Lorem ipsum dolor sit amet,
         consectetur adipiscing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua. Ut enim
           ad minim veniam, quis nostrud exercitation ullamco 
           laboris nisi ut aliquip ex ea commodo consequat. 
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu "
          auth="-Author"
        />
      </div>
      <section className="middle-section">
        <h2 className="middle-text">Lorem Ipsum</h2>
        <div className="blog-box">
          <Button
            onClick={() => history("/createPost")}
            className="make-blog-post"
          >
            Make blog post
          </Button>
        </div>
        <p className="sortBy">Sort by</p>
        <DropDowns />
      </section>
      <div className="blogBoxes">
        <BlogBox
          src={group}
          date="10 FEBRUARY 2022 14:30"
          title="Lorem ipsum"
          description="Lorem ipsum dolor sit amet, consectetur 
          adipiscing elit, sed do eiusmod tempor 
          incididunt ut labore et dolore magna aliqua. 
          Lorem ipsum dolor sit amet, consectetur 
          adipiscing elit, sed do eiusmod tempor 
          incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur 
          adipiscing elit, sed do eiusmod tempor."
          author="-Author"
        />
        <BlogBox
          src={manWalking}
          date="10 FEBRUARY 2022 14:30"
          title="Lorem ipsum"
          description="Lorem ipsum dolor sit amet, consectetur 
          adipiscing elit, sed do eiusmod tempor 
          incididunt ut labore et dolore magna aliqua. 
          Lorem ipsum dolor sit amet, consectetur 
          adipiscing elit, sed do eiusmod tempor 
          incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur 
          adipiscing elit, sed do eiusmod tempor."
          author="-Author"
        />
        <BlogBox
          src={house}
          date="10 FEBRUARY 2022 14:30"
          title="Lorem ipsum"
          description="Lorem ipsum dolor sit amet, consectetur 
          adipiscing elit, sed do eiusmod tempor 
          incididunt ut labore et dolore magna aliqua. 
          Lorem ipsum dolor sit amet, consectetur 
          adipiscing elit, sed do eiusmod tempor 
          incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur 
          adipiscing elit, sed do eiusmod tempor 
          incididunt ut labore et dolore magna aliqua. 
          Lorem ipsum dolor sit amet, consectetur 
          adipiscing elit, sed do eiusmod tempor."
          author="-Author"
        />
      </div>
      <div className="second-row">
        <BlogBox
          src={group}
          date="10 FEBRUARY 2022 14:30"
          title="Lorem ipsum"
          description="Lorem ipsum dolor sit amet, consectetur 
          adipiscing elit, sed do eiusmod tempor 
          incididunt ut labore et dolore magna aliqua. 
          Lorem ipsum dolor sit amet, consectetur 
          adipiscing elit, sed do eiusmod tempor 
          incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur 
          adipiscing elit, sed do eiusmod tempor."
          author="-Author"
        />
        <BlogBox
          src={manWalking}
          date="10 FEBRUARY 2022 14:30"
          title="Lorem ipsum"
          description="Lorem ipsum dolor sit amet, consectetur 
          adipiscing elit, sed do eiusmod tempor 
          incididunt ut labore et dolore magna aliqua. 
          Lorem ipsum dolor sit amet, consectetur 
          adipiscing elit, sed do eiusmod tempor 
          incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur 
          adipiscing elit, sed do eiusmod tempor."
          author="-Author"
        />
        <BlogBox
          src={house}
          date="10 FEBRUARY 2022 14:30"
          title="Lorem ipsum"
          description="Lorem ipsum dolor sit amet, consectetur 
          adipiscing elit, sed do eiusmod tempor 
          incididunt ut labore et dolore magna aliqua. 
          Lorem ipsum dolor sit amet, consectetur 
          adipiscing elit, sed do eiusmod tempor 
          incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur 
          adipiscing elit, sed do eiusmod tempor 
          incididunt ut labore et dolore magna aliqua. 
          Lorem ipsum dolor sit amet, consectetur 
          adipiscing elit, sed do eiusmod tempor."
          author="-Author"
        />
      </div>
    </div>
  );
}

export default Blog;
