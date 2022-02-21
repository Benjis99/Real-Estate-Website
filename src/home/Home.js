import React from "react";
import "./Home.css";
import Banner from "./Banner";
import Card from "./Card";
import Secondbanner from "./Secondbanner";
import house1 from "../pictures/house1.jpg";
import house2 from "../pictures/house2.jpg";
import house3 from "../pictures/house3.jpg";
import house4 from "../pictures/house4.jpg";
import BathtubIcon from '@mui/icons-material/Bathtub';

function Home() {
  return (
    <div className="home">
      <Banner />

      <h1 class="boxtitle">A place for everyone.</h1>

      <div class="textbox">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. At in
          tellus integer feugiat scelerisque varius. Scelerisque felis imperdiet
          proin fermentum leo vel. Morbi non arcu risus quis varius. Et tortor
          consequat id porta nibh venenatis cras. Tortor pretium viverra
          suspendisse potenti. Placerat orci nulla pellentesque dignissim enim
          sit amet venenatis urna. Eu ultrices vitae auctor eu. Commodo nulla
          facilisi nullam vehicula ipsum a arcu cursus. Nullam ac tortor vitae
          purus. Ante in nibh mauris cursus mattis molestie. Convallis posuere
          morbi leo urna molestie. Amet massa vitae tortor condimentum lacinia.
          Diam in arcu cursus euismod quis viverra. Lacus sed turpis tincidunt
          id aliquet. Eget est lorem ipsum dolor sit amet consectetur adipiscing
          elit. Lorem mollis aliquam ut porttitor leo a diam. Varius morbi enim
          nunc faucibus.
        </p>
      </div>

      <h1 class="titlesecond">Top listings</h1>
      <hr></hr>

      <div className="displaySection">
        <Card
          src={house1}
          biddingstamp ="Active bidding"
          title="1871 N Stanley Ave"
          description="Forged into the hillside above Sunset, this stunning new construction,
          truly unique warm contemporary architectural provides unmatched security and privacy 
          and offers the highest caliber of living in a world-class location moments from the finest shopping,
          dining and leisure the city has to offer. With parking for over 20 cars, guests and future owners cant help but feel
          the positive energy from the museum quality, curated crystal collection meticulously placed prior to entering. 
          Just past the cascading water wall, an open-concept floor plan awaits, with unparalleled design and exquisite finishes throughout. 
          Walls of retractable glass provide an influx of natural light, 
          seamlessly blurring the lines between indoors and outdoors to offer the ultimate Southern California lifestyle."
          location="NICHOLS CANYON, LOS ANGELES, CA 90046"
          startingPrice="$28,800,000 "
          beds=" 4 Beds "
          baths=" 5 Baths  "
          type=" Single Family Home "
        />
        <Card
          src={house2}
          biddingstamp ="Active bidding"
          title="1115 Wallace Rdg"
          description="One of the most sophisticated design homes currently available. 
          Rebuilt in 2016, this trophy property offers a classic Modern architecture that makes an unparalleled statement of vision and design while 
          showcasing stunning panoramic city to ocean views. The property has apx. 28,000 sq.ft. lot on a private cul-de-sac in prime Trousdale Estates,
          completely private, gated, and hedged. The house is flawlessly designed and crafted, apx. 12'6' ceilings, floor-to-ceiling windows/ doors seamlessly
          integrate interior and exterior spaces for the ultimate California lifestyle.Exuding luxury, the impressive master suite encompasses a sitting room, fireplace, walk- in closets, 
          spacious stone filled bathrooms and a private balcony boasting unobstructed views."
          startingPrice="$25,000,000"
          location="BEVERLY HILLS, CA 90210"
          beds=" 6 Beds "
          baths=" 6 Baths  "
          type=" Single Family Home "
        />
      
          <Card
          src={house2}
          biddingstamp ="Active bidding"
          title="6525 Point Lechuza Dr"
          description="A perfect combination of rare natural beauty and iconic design, 
          the Koenig Beach House is the last built project from world renowned architect Pierre Koenig,
          who brought us a multitude of architectural triumphs including the famed Stahl House Case Study.
          A masterpiece 11 years in the making, this fortified beach bluff home is located at the end of a cul-de-sac on a private and gated street.
          Specifically positioned to maximize the best coastline views, this eco-friendly home has walls of glass and sliding doors throughout providing
          an abundance of natural light and allowing a smooth transition from indoor living to beach front paradise. "
          startingPrice="$24,950,000"
          location="WESTERN MALIBU, MALIBU, CA 90265"
          beds=" 2 Beds "
          baths=" 3 Baths  "
          type=" Single Family Home "
        />
        
      </div>

      <Secondbanner/>
      <h1 class="titlethird">Popular right now</h1>
      <hr></hr>
      <div className="displaySection">
        <Card
          src={house3}
          biddingstamp ="Active bidding"
          title="9344 Nightgale Dr"
          description="Capturing extraordinary views from a private promontory in the Bird Streets, 
          this spectacular new contemporary estate was envisioned by architect Zoltan Pali and Brough to life by master home builder Dugally Oberfeld. 
          Positioned to maximize far-reaching canyon, city and ocean views, the home fuses indoor-outdoor living with a stunning 60 long retractable skylight and automated glass pocket doors."
          startingPrice="$27,995,000"
          location="WEST LOS ANGELES, LOS ANGELES, CA 90069"
          beds=" 2 Beds "
          baths=" 3 Baths "
          type=" Single Family Home "
        />

        
        <Card
          src={house4}
          biddingstamp ="Active bidding"
          title="3201 Campanil Dr"
          description="Campanil Hill is widely recognized as one of the world's preeminent ocean view locations and its single most private and valued property is now available for purchase.
          Perched above the Santa Barbara coastal bluffs at the farthest end of ultra-private Campanil Drive, enjoy sweeping, 
          unobstructed Pacific Ocean and Channel Island views from one of the most impressive estates in Santa Barbara. 
          This timeless, ultra-luxury, panoramic-view trophy-home of the highest caliber offers elegant, yet welcoming ambiance from its lavish interiors. "
          startingPrice="$29,000,000"
          location="3201 Campanil Dr
          CAMPANIL, SANTA BARBARA, CA 93109"
          beds=" 6 Beds "
          baths=" 6 Baths "
          type=" Single Family Home "
        />

        <Card
          src={house4}
          biddingstamp ="Active bidding"
          title="1231 Lago Vista Dr"
          description="Set behind gates surrounded by tall hedging and abundant greenery, 1231 Lago Vista Dr is supremely set in the highly coveted 90210 zip code of Beverly Hills. 
          A true display of luxury showcasing 12,800 square feet of sleek design and exquisite finishes on 2 parcels of land totaling over an acre. 
          Operated by a fully integrated Crestron System personalized to your lifestyle, the 7-bedroom, 11-bathroom home offers an unparalleled living experience."
          startingPrice="$32,000,000"
          location="BEVERLY HILLS, CA 90210"
          beds=" 7 Beds "
          baths=" 11 Baths "
          type=" Single Family Home "
        />
        <Card
          src={house3}
          biddingstamp ="Active bidding"
          title="2505 Summitridge Dr"
          description="7.5 ACRE world class compound offering ample space and stunning panoramic views set in the exclusive guard gated Bella Vista Estates.
           Behind personal gates providing ample security and privacy, 2505 Summitridge Dr hosts the most impressive outdoor setting in all of Los Angeles.
            The private backyard showcases a massive infinity-edge pool, spa, cold plunge, outdoor kitchen with a custom pizza oven, dining, and large lawn area.
             Across the street from the main residence, you have your very own private sport court, playground and park."
          startingPrice="$29,900,000"
          location="BEVERLY HILLS, CA 90210"
          beds=" 9 Beds "
          baths=" 9 Baths "
          type=" Single Family Home "
        />
      </div>
    </div>
  );
}

export default Home;
