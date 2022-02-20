import React from 'react'
import './Listingdetails.css'
import BedIcon from '@mui/icons-material/Bed';
import HouseIcon from '@mui/icons-material/House';
import ShowerIcon from '@mui/icons-material/Shower';
import Bed from '@mui/icons-material/Bed';

function Listingdetails({listingtitle, listingaddress, listinginformation}) {
  return (
    <div class="Listingdetails">

    <div class="flexcontainer1">

    <div class="flexcontainer2">
    <h1 class="listingtitle">{listingtitle}</h1>
    <h3 class="listingaddress">{listingaddress}</h3>
    </div>

    <div class="flexcontainer3">
    <div class="listingicons">
        <HouseIcon/>
        <Bed/>
        <ShowerIcon/>
        </div>
        </div>
        
    </div>
    <p class="listinginformation">{listinginformation}</p>
    </div>
  )
}

export default Listingdetails