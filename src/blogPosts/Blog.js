import React from "react";
import "./Blog.css";
import BlogBox from "./BlogBox";
import PictureTextBox from "./pictureTextBox";
import host from "../pictures/host.jpg";
import group from "../pictures/group.jpg";
import manWalking from "../pictures/manwalking.jpg";
import house from "../pictures/house.jpg";

function Blog() {
  return (
    <div className="blog">
      <h1 className="mainText">RECENT POSTS</h1>
      <div className="recentPost">
        <PictureTextBox
          src={host}
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
      <div className="blogBoxes">
        <BlogBox
          src={group}
          title="10 FEBRUARY 2022 14:30"
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
          title="10 FEBRUARY 2022 14:30"
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
          title="10 FEBRUARY 2022 14:30"
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
