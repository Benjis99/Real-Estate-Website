import React from 'react'
import './Realtor.css'

function Realtor({realtorimg,realtorname, realtorfunction, realtoremail, realtornumber}) {
  return (
    <div class="Realtor">
     <img class="realtorprofile" src={realtorimg} alt="" />
    <h4 class="realtorname">{realtorname}</h4>
    <p class="realtorfunction">{realtorfunction}</p>
    <p class="realtorcontact">{realtoremail, realtornumber}</p>

    
    
    
    </div>
  )
}

export default Realtor