import React, { useState } from "react";
import bang from "../assets/services/bang.jpg";
import trim from "../assets/services/trim.jpg";
import { SERVICES } from "../data.js";

//state 2
//props 2

export default function ServiceItems() {
  // Array of haircut images - sources at bottoms
  const cutimages = [trim, bang];
  // Array of haircut descriptions
  const cutdescriptions = ["Haircut - $40.00", "Bang Trim - $10.00"];

  // State for current haircut image index
  const [currentCutImageIndex, setCurrentCutImageIndex] = useState(0);

  // Handler for changing the haircut image
  function handleCutImageClick() {
    setCurrentCutImageIndex((currentCutImageIndex + 1) % cutimages.length);
  }

  return (
    <div className="servicecontainer">
      <h1>Services</h1>
      <p>{SERVICES[0].service}</p>
      <p>{SERVICES[1].service}</p>
      <p>{SERVICES[2].service}</p>

      <p className="servicetitle">Click images to view options</p>
      <dl className="servicegrid">
        <div className="service-item">
          <dt className="servicedescription">
            {cutdescriptions[currentCutImageIndex]}
          </dt>
          <img
            className="serviceimage"
            src={cutimages[currentCutImageIndex]}
            alt={cutdescriptions[currentCutImageIndex]}
            onClick={handleCutImageClick}
          />
        </div>
      </dl>
    </div>
  );
}

// image sources
//bang- https://www.freepik.com/free-photo/front-view-woman-getting-haircut_12060040.htm#fromView=search&page=1&position=52&uuid=3b8756c2-4ca5-4e7d-a589-9266dc1c4164
//trim - https://www.freepik.com/free-photo/woman-getting-her-hair-cut-beauty-salon_20083223.htm#fromView=search&page=1&position=10&uuid=422a081f-4321-4b1d-b12f-07161e448bb0

//used similar concept from my proj , running out of time for new idea
