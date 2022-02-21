import React from 'react'
import './Listingdetails.css'
import BedIcon from '@mui/icons-material/Bed';
import HouseIcon from '@mui/icons-material/House';
import ShowerIcon from '@mui/icons-material/Shower';
import Bed from '@mui/icons-material/Bed';

function Listingdetails({listingTitle, listingAddress, listingInformation}) {
  return (
    <div className="listingDetails">

    <div className="flexContainer1">

    <div className="flexContainer2">
    <h1 className="listingTitle">{listingTitle}</h1>
    <h3 className="listingAddress">{listingAddress}</h3>
    </div>

    <div className="flexContainer3">
    <div className="listingIcons">
        <HouseIcon/>
        <Bed/>
        <ShowerIcon/>
        </div>
        </div>
        
    </div>
    <p className="listingInformation">{listingInformation}</p>
    </div>
  )
}

export default Listingdetails