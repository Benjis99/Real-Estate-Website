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
      </div>
    </div>
  );
}

export default Home;
