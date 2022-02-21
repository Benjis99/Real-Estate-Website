import React from "react";
import "./OurServices.css";
import OurServicesHeader from "../pictures/OurServicesHeader.png";

function OurServices() {
  return (
    <div>
      <div className="servicesHeadContainer"></div>

      <div className="flex-container">
        <div className="flex-item"></div>
        <div className="flex-item">
          <h1 className="servicesHeaderH1">Lorem ipsum</h1>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. At in
          tellus integer feugiat scelerisque varius. Scelerisque felis imperdiet
          proin fermentum leo vel. Morbi non arcu risus quis varius. Et tortor
          consequat id porta nibh venenatis cras. Tortor pretium viverra
          suspendisse potenti. Placerat orci nulla pellentesque dignissim enim
          sit amet venenatis urna. Eu ultrices vitae auctor eu. Commodo nulla
          facilisi nullam vehicula ipsum a arcu cursus. Nullam ac tortor vitae
          purus
        </div>
        <div className="flex-item"></div>
      </div>
      <div className="servicesSecondHead"></div>

      <div className="servicesInfoHeader">
        <h1 className="servicesInfoHeaderText">Designed to meet your needs</h1>
      </div>
      <div className="servicesInfoContainer">
        <div className="flex-container-info">
          <div className="flex-item-info">1</div>
          <div className="flex-item-info">
            <div className="houseIcon"></div>
            <p className="servicesIconTitle">LIST</p>{" "}
            <p className="servicesIconTitleOrange">YOUR PROPTERY</p>
            <p>
              <br></br>
              If you are looking to sell your property, look no further. We will
              assist you in the process of selling your property. Fill in this
              form and we will contact you.{" "}
              <p className="servicesTextOrange">
                <a href="#" className="servicesTextOrange">
                  CLICK HERE
                </a>
              </p>
            </p>
          </div>
          <div className="flex-item-info">
            <div className="propteryFinder"></div>
            <p className="servicesIconTitle">PROPTERY</p>
            <p className="servicesIconTitleOrange"> FINDER</p>
            <p>
              <br></br>
              If you are looking for the perfect home that will suit your family
              and your budget, then we are here to help. Fill in this form and
              we will contact you.{" "}
              <p className="servicesTextOrange">
                <a href="#" className="servicesTextOrange">
                  CLICK HERE
                </a>
              </p>
            </p>
          </div>
          <div className="flex-item-info">
            <div className="alertBell"></div>
            <p className="servicesIconTitle">PROPERTY</p>{" "}
            <p className="servicesIconTitleOrange">ALERTS</p>
            <p>
              {" "}
              <br></br>
              Want to be kept in the loop when new properties are listed in your
              area that matches your requirements? Register for our property
              alerts.{" "}
              <p className="servicesTextOrange">
                <a href="#" className="servicesTextOrange">
                  CLICK HERE
                </a>
              </p>
            </p>
          </div>

          <div className="flex-item-info">5</div>
        </div>
        <div className="servicesInfoHeader">
          <h1 className="servicesInfoHeaderText">Meet your realtors</h1>
        </div>
      </div>
      <div className="servicesInfoRealtors">
        <div className="flex-container-realtors">
          <div className="flex-item-realtors">1</div>

          <div className="flex-item-realtors">
            2<div className="realtorPicOne"></div>
            <h1>test</h1>
          </div>
          
          <div className="flex-item-realtors">
            3<div className="realtorPicTwo"></div>
          </div>

          <div className="flex-item-realtors">
            4<div className="realtorPicThree"></div>
          </div>
          <div className="flex-item-realtors">
            5<div className="realtorPicTwo"></div>
          </div>
          <div className="flex-item-realtors">6</div>
          <div className="flex-item-realtors">7</div>
          <div className="flex-item-realtors">
            8<div className="realtorPicThree"></div>
          </div>
          <div className="flex-item-realtors">
            9<div className="realtorPicOne"></div>
          </div>
          <div className="flex-item-realtors">
            10<div className="realtorPicTwo"></div>
          </div>
          <div className="flex-item-realtors">
            11<div className="realtorPicThree"></div>
          </div>
          <div className="flex-item-realtors">12</div>
        </div>
      </div>
    </div>
  );
}

export default OurServices;
