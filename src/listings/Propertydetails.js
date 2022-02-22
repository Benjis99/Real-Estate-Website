import React from 'react'
import './Propertydetails.css'

function Propertydetails({yearBuilt,propertyType, daysOnMarket, listingId, conditioner, patio, pool, garage, cityView, waterView, newConstruction}) {
  return (
    <div className="propertyDetails">
       

        <div className="detailsContainer">
        
        <div className="detailsInfo">
        <h1 className="detailsTitle">Property details</h1>

          <div className="section1">
          <div className="flexDetail1">
          <p className="pointTitle">YEAR BUILT</p>
           <p>{yearBuilt}</p>
           <p className ="pointTitle">PROPERTY TYPE</p>
           <p>{propertyType}</p>
           </div>
           <div className="flexDetail2">
           <p className="pointTitle">DAYS ON MARKET</p>
           <p>{daysOnMarket}</p>
           <p className="pointTitle">LISTINGS ID</p>
           <p>{listingId}</p>
           </div>
           </div>
           
           <div className="section2">
           <p className="pointTitle2">AMENITIES</p>
           <p>{conditioner}</p>
           <p>{patio}</p>
           <p>{pool}</p>
           </div>

           <div className="section3">
           <div className="flexDetail3">
           <p className="pointTitle2">BUILDING/PROPERTY DETAILS</p>
           <p>{conditioner}</p>
           <p>{garage}</p>
           <p>{waterView}</p>
           </div>
           <div className="flexDetail4">
           <p>{cityView}</p>
           <p>{newConstruction}</p>
           </div>
           </div>
           </div>   

           <div className="sideInfo">
              <h1 className="sideTitle">Listing information</h1>
             <p className="sideDescription">
             Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
             </p>
             </div>
  </div>
  </div>
  )
}

export default Propertydetails;