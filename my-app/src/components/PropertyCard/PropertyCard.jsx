import React from "react";
import "./PropertyCard.css";

function PropertyCard({
  imageUrl,
  title,
  location,
  price,
  bedrooms,
  bathrooms,
  parkingSpaces,
  isAvailableNow,
}) {
  return (
    <div className="p24_listingCard p24_listingFeaturesWrapper">
      <div className="p24_mBM">
        <div className="p24_imageSide">
          <img src={imageUrl} alt={title} className="p24_image" />
        </div>
        <div className="p24_dataSide">
          <div className="p24_favourite">
            {/* Placeholder for favourite button */}
            <button>Add to Favourites</button>
          </div>
          <div className="p24_price">{price}</div>
          <div className="dropdown p24_bond">
            {/* Placeholder for bond dropdown */}
            <select>
              <option value="">Select Bond</option>
              <option value="bond1">Bond 1</option>
              <option value="bond2">Bond 2</option>
            </select>
          </div>
        </div>
      </div>
      <div className="p24_mBM">
        <h1>{title}</h1>
      </div>
      <div className="p24_mBM">{location}</div>
      <div className="p24_mBM">
        <a
          className="p24_address js_requestStreetAddress"
          href="#"
          data-toggle="modal"
          data-target="#ContactAgentModal"
        >
          Contact agent for street address
        </a>
      </div>
      <div className="p24_iconsWrapper">
        <ul className="p24_icons">
          <li className="p24_featureDetails" title="Bedrooms">
            <img
              src="C:\Users\USER-PC\Desktop\OW Year\Ineractive Development\Year 2\Term 1\copy\week2or3ReactGroupChallenge\my-app\src\houseStockPhotos\house1.jpeg"
              alt="Bedrooms"
              className="p24_bedroomIcon"
            />
            <span>{bedrooms}</span>
          </li>
          <li className="p24_featureDetails" title="Bathrooms">
            <img
              src="/Content/images/Optimized/Icons/icon_bath_listing.svg?z=5383dcd42846c13e0634"
              alt="Bathrooms"
              className="p24_bathroomIcon"
            />
            <span>{bathrooms}</span>
          </li>
          <li className="p24_featureDetails" title="Parking Spaces">
            <img
              src="/Content/images/Optimized/Icons/icon_parking_listing.svg?z=ff69361343bd0ce01b24"
              alt="Garages"
              className="p24_garageIcon"
            />
            <span>{parkingSpaces}</span>
          </li>
        </ul>
      </div>
      <ul className="p24_badges">
        {isAvailableNow && (
          <li className="p24_availableBadge">AVAILABLE NOW</li>
        )}
      </ul>
    </div>
  );
}

export default PropertyCard;
