import React from 'react'
import './Realtor.css'

function Realtor({realtorImg,realtorName, realtorFunction, realtorEmail, realtorNumber}) {
  return (
    <div className="Realtor">

      <div className="realtorContainer">
     <img className="realtorProfile" src={realtorImg} alt="" />
    <h4 className="realtorName">{realtorName}</h4>
    <p className="realtorFunction">{realtorFunction}</p>
    <p className="realtorContact">{realtorEmail}<p>{realtorNumber}</p></p>

    
    </div>
    
    </div>
  )
}

export default Realtor