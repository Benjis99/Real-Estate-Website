import React from "react";
import "./Home.css";
import Banner from "./Banner";
import Card from "./Card";
import house1 from "./pictures/house1.jpg";
import house2 from "./pictures/house2.jpg";
import house3 from "./pictures/house3.jpg";
import house4 from "./pictures/house4.jpg";


function Home() {
  return (
    <div className="home">
      <Banner />

     
        <h1>Let us guide you home.</h1>

      <div class="textbox">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. At in tellus integer feugiat scelerisque varius. Scelerisque felis imperdiet proin fermentum leo vel.
           Morbi non arcu risus quis varius. Et tortor consequat id porta nibh venenatis cras. 
           Tortor pretium viverra suspendisse potenti. Placerat orci nulla pellentesque dignissim enim sit amet venenatis urna. Eu ultrices vitae auctor eu. Commodo nulla facilisi nullam vehicula ipsum a arcu cursus.
            Nullam ac tortor vitae purus. Ante in nibh mauris cursus mattis molestie. Convallis posuere morbi leo urna molestie. Amet massa vitae tortor condimentum lacinia. Diam in arcu cursus euismod quis viverra. Lacus sed turpis tincidunt id aliquet. Eget est lorem ipsum dolor sit amet consectetur adipiscing elit. Lorem mollis aliquam ut porttitor leo a diam. Varius morbi enim nunc faucibus.</p>
      </div>

      <h1>Our current listings</h1>
      <hr></hr>

      <div className="displaySection">
        <Card
          src={house1}
          title="Title"
          description="Description"
          startingPrice="Price"
          location="Location"
        />
        <Card
          src={house2}
          title="Title"
          description="Description"
          startingPrice="Price"
          location="Location"
        />
      </div>

      <div className="displaySection">
        <Card
          src={house3}
          title="Title"
          description="Description"
          startingPrice="Price"
          location="Location"
        />
        <Card
          src={house4}
          title="Title"
          description="Description"
          startingPrice="Price"
          location="Location"
        />

<Card
          src={house4}
          title="Title"
          description="Description"
          startingPrice="Price"
          location="Location"
        />
         <Card
          src={house3}
          title="Title"
          description="Description"
          startingPrice="Price"
          location="Location"
        />
      </div>
    </div>
  );
}

export default Home;
