import React from 'react'
import './Realtor.css'

function Realtor({realtorimg,realtorname, realtorfunction, realtoremail, realtornumber}) {
  return (
    <div class="Realtor">

      <div class="realtorcontainer">
     <img class="realtorprofile" src={realtorimg} alt="" />
    <h4 class="realtorname">{realtorname}</h4>
    <p class="realtorfunction">{realtorfunction}</p>
    <p class="realtorcontact">{realtoremail}<p>{realtornumber}</p></p>

    
    </div>
    
    </div>
  )
}

export default Realtor