<<<<<<< HEAD
import React from 'react'
import Listingdetails from './Listingdetails'
import Realtor from './Realtor'
import Listingbanner from './Listingbanner';
import samirprofile from '../pictures/samirprofile.png'
import Propertydetails from './Propertydetails';
import './Listings.css'
import DatePicker from './DatePicker';
import Slider from '../home/Slider';
=======
import React from "react";
import Listingdetails from "./Listingdetails";
import Realtor from "./Realtor";
import Listingbanner from "./Listingbanner";
import samirprofile from "../pictures/samirprofile.png";
import Propertydetails from "./Propertydetails";
import "./Listings.css";
import { Button } from "react-bootstrap";
import DatePicker from "./DatePicker";
>>>>>>> 017f2c76aaa76e9a2f5923fb927e0aaa452447e1

function listings() {
  return (
    <div className="Listings">
<<<<<<< HEAD
    <Slider/>
=======
      <Listingbanner />
>>>>>>> 017f2c76aaa76e9a2f5923fb927e0aaa452447e1

      <div class="listingCont">
        <div className="cont1">
          <Listingdetails
            listingTitle="Lorem ipsum dolor amet"
            listingAddress="Lorem ipsum dolor sit amet 2624 st"
            listingInformation="Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
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

        <div className="cont2">
          <Realtor
            realtorImg={samirprofile}
            realtorName="Samir Verchik"
            realtorFunction="REALTOR"
            realtorEmail="Samir@realtor.com"
            realtorNumber="000-000000"
          />
        </div>
      </div>

      <Propertydetails
        yearBuilt="1987"
        propertyType="Lorem Ipsum"
        daysOnMarket="Lorem Ipsum"
        listingId="8457359"
        conditioner="Lorem Ipsum"
        patio="Lorem Ipsum"
        pool="Lorem Ipsum"
        conditioner="Lorem Ipsum"
        garage="Lorem Ipsum"
        waterView="Lorem Ipsum"
        cityView="Lalala"
        newConstruction="lalalajskdghsdgjks"
        calender={<DatePicker />}
      />
    </div>
  );
}

export default listings;
