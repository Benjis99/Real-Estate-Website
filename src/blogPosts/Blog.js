import React from "react";
import "./Blog.css";
import BlogBox from "./BlogBox";
import PictureTextBox from "./pictureTextBox";

function Blog() {
  return (
    <div className="blog">
      <h1 className="mainText">RECENT POSTS</h1>
      <div className="recentPost">
        <PictureTextBox
          src="https://www.rassmanlaw.com/wp-content/uploads/2019/04/Personal-Representative.jpg"
          date="10 FEBRUARY 2022 16:50"
          title="POST TITLE"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "
          secondDescription="Lorem ipsum dolor sit amet,
         consectetur adipiscing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua. Ut enim
           ad minim veniam, quis nostrud exercitation ullamco 
           laboris nisi ut aliquip ex ea commodo consequat. 
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu "
        />
      </div>
      <div className="blogBoxes">
        <BlogBox
          src="https://pepperstormmedia.com/wp-content/uploads/2017/04/Blog-1.jpg"
          title="10 FEBRUARY 2022 14:30"
          description="afgs agasg asdsafd sfs afsa asf asf asf as fasfasdf sa afgsagas  gasdsafdsfsafsa asf asf asf as fasfasdf sa afgsagas  gasdsafdsfsafsa asf asf asf as fasfasdf sa"
          author="author"
        />
        <BlogBox
          src="https://pepperstormmedia.com/wp-content/uploads/2017/04/Blog-1.jpg"
          title="10 FEBRUARY 2022 14:30"
          description="afgsag   asgasdsaf  sfsafsa  asf asf asf as fasfasdf sa afgsagas  gasdsafdsfsafsa asf asf asf as fasfasdf sa vafgsagas  gasdsafdsfsafsa asf asf asf as fasfasdf sa"
          author="author"
        />
        <BlogBox
          src="https://pepperstormmedia.com/wp-content/uploads/2017/04/Blog-1.jpg"
          title="10 FEBRUARY 2022 14:30"
          description="afgsagas  gasdsafdsfsafsa asf asf asf as fasfasdf sa afgsagas  gasdsafdsfsafsa asf asf asf as fasfasdf sa afgsagas  gasdsafdsfsafsa asf asf asf as fasfasdf sa"
          author="author"
        />
      </div>
    </div>
  );
}

export default Blog;
