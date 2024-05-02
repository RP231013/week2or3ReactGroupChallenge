// HeroImage.jsx

import React from "react";
import "./HeroImage.css";

export default function HeroImage() {
  return (
    <header className="hero-container">
      <div
        className="p-5 text-center bg-image hero-image-container"
        style={{
          backgroundImage:
            "url('https://images.pexels.com/photos/7578942/pexels-photo-7578942.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')",
        }}
      >
        <div className="overlay"></div> {/* Add this line for overlay */}
        <div className="mask">
          <div className="hero-container">
            <div className="hero-text-container">
              <h1 className="mb-3">Find Property to Rent!</h1>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
