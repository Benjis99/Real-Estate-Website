import React from 'react'
import Listingdetails from './Listingdetails'
import Realtor from './Realtor'
import Listingbanner from './Listingbanner';
import samirprofile from '../pictures/samirprofile.png'
import Propertydetails from './Propertydetails';

function listings() {
  return (
    <div class="Listings">
    <Listingbanner/>

   <div class="listingcont">

  <div class="cont1">
  <Listingdetails
  listingtitle="Lorem ipsum dolor amet"
  listingaddress="Lorem ipsum dolor sit amet 2624 st"
  listinginformation="Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
  sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
  At in tellus integer feugiat scelerisque varius. Scelerisque felis imperdiet proin fermentum leo vel. 
  Morbi non arcu risus quis varius. Et tortor consequat id porta nibh venenatis cras.
   Tortor pretium viverra suspendisse potenti. Placerat orci nulla pellentesque dignissim enim sit amet venenatis urna.
  Eu ultrices vitae auctor eu. Commodo nulla facilisi nullam vehicula ipsum a arcu cursus. 
  Nullam ac tortor vitae purus. Ante in nibh mauris cursus mattis molestie. 
  Convallis posuere morbi leo urna molestie. Amet massa vitae tortor condimentum lacinia.
  Diam in arcu cursus euismod quis viverra. Lacus sed turpis tincidunt id aliquet. 
  Eget est lorem ipsum dolor sit amet consectetur adipiscing elit. 
  Lorem mollis aliquam ut porttitor leo a diam. Varius morbi enim nunc faucibus."
  />
  </div>

  <div class="cont2">
  <Realtor
  realtorimg={samirprofile}
  realtorname="Samir Verchik"
  realtorfunction="REALTOR"
  realtor
  />
  </div>

 </div>

<Propertydetails/>
 

    </div>
  );
}

export default listings