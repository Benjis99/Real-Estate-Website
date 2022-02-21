import React from 'react'
import './Propertydetails.css'

function Propertydetails({yearbuilt,propertytype, daysonmarket, listingid, conditioner, patio, pool, garage, cityview, waterview, newconstruction}) {
  return (
    <div class="Propertydetails">
       

        <div class="detailscontainer">
        
        <div class="detailsinfo">
        <h2 class="detailstitle">Property details</h2>

          <div class="section1">
          <div class="flexdetail">
          <p class ="pointtitle">YEAR BUILT</p>
           <p>{yearbuilt}</p>
           <p class ="pointtitle">PROPERTYTYPE</p>
           <p>{propertytype}</p>
           </div>
           <div class="flexdetail2">
           <p class ="pointtitle">DAYS ON MARKET</p>
           <p>{daysonmarket}</p>
           <p class ="pointtitle">LISTINGS ID</p>
           <p>{listingid}</p>
           </div>
           </div>
           
           <div class="section2">
           <p class ="pointtitle">AMENITIES</p>
           <p>{conditioner}</p>
           <p>{patio}</p>
           <p>{pool}</p>
           </div>

           <div class="section3">
           <div class="flexdetail">
           <p class ="pointtitle">BUILDING/PROPERTY DETAILS</p>
           <p>{conditioner}</p>
           <p>{garage}</p>
           <p>{waterview}</p>
           </div>
           <div class="flexdetail2">
           <p>{cityview}</p>
           <p>{newconstruction}</p>
           </div>
           </div>
           </div>   

           <div class="sideinfo">
              <h1 class="sidetitle">Listing information</h1>
             <p class="sidedescription">
             Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
             </p>
             </div>
  </div>
  </div>
  )
}

export default Propertydetails;