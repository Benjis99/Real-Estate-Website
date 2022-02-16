import React from "react";
import "./Card.css";
import BathtubIcon from '@mui/icons-material/Bathtub';
import BedIcon from '@mui/icons-material/Bed';
import HouseIcon from '@mui/icons-material/House';
import ShowerIcon from '@mui/icons-material/Shower';
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous"></link>

function Card({ src, biddingstamp,title, description, startingPrice, location, beds, baths, type }) {
  return (
    <div className="card">
      <h2 class="biddingstamp">{biddingstamp}</h2>
      <img src={src} alt="" />
      <div className="description">
        <h2 class="listingtitle">{title}</h2>
        <h3>{location}</h3>
        <p>{description} </p>
      
      <div class="listingicons">
        <p><BedIcon/> <ShowerIcon/> <HouseIcon/></p></div>
        <div class="listingsummary"><p>{beds}</p>
        <p>{baths}</p>
        <p>{type}</p>
        </div>
        
      <h2 class="listingprice">{startingPrice}</h2>
    
      </div>
    </div>
  );
}

export default Card;
