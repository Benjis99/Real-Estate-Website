import React from 'react'
import './Listingdetails.css'
import BedIcon from '@mui/icons-material/Bed';
import HouseIcon from '@mui/icons-material/House';
import ShowerIcon from '@mui/icons-material/Shower';
import Bed from '@mui/icons-material/Bed';
import SendIcon from '@mui/icons-material/Send';
import FavoriteIcon from '@mui/icons-material/Favorite';
import PrintIcon from '@mui/icons-material/Print';

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
        <p className='iconNum'>8</p>
        </div>
        <div className="listingIcons2">
        <Bed/>
        <p className='iconNum'>7</p>
        </div>
        <div className="listingIcons3">
        <ShowerIcon/>
        <p className='iconNum'>4</p>
        </div>
       
        </div>
        
    </div>
    <p className="listingInformation">{listingInformation}
    </p>

    <p className='shareContainer'>
    <p className='shareIcons'>
      <FavoriteIcon/>
      </p>
      <p className='shareIcons'>
      <SendIcon/>
      </p>
      <p className='shareIcons'>
      <PrintIcon/>
      </p>

    </p>
    </div>
  )
}

export default Listingdetails