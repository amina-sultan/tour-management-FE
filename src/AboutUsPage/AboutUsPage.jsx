import React from "react";
import "./AboutUsPage.css";
import xyz from "../assets/xyz.jpg"; // Make sure this path is correct

const AboutUsPage = () => {
  return (
    <div className="about-us-container">
      <div className="about-us">
        <h3>About SadaBahar Tours</h3>
        <img src={xyz} alt="About Us" className="about-image" />
        <p>
          At SadaBahar Tours, we have a real passion for Pakistan. We believe
          that booking each aspect of your Pakistan holiday should be easy,
          seamless and all in one place. From the mountainous paradise of Hunza
          Valley to the welcoming locals of Lahore, this is a country of boundless
          awe - and we're here to help you discover it.
        </p>
        <p>
          For years, Pakistan's tourism industry has been based on outdated
          models; booking tours and hotels have been difficult and choices unclear.
          We decided it is about time for the Pakistan tourism industry needs to
          bring into the digital era.
        </p>
        <p>
          Using world-class technology with great customer support, PakVoyager is
          the leading Pakistan Online Tour and Travel Booking Company with an
          International and local presence.
        </p>
        <p>
          Pak Voyager effortlessly connects you with Pakistan's best tour
          operators, hotels, and car rentals so you can book your stay and explore
          the country with peace of mind. We also believe the joy of travel is not
          just in experiencing a country. It's also about giving back to the places
          you visit.
        </p>
        <h3>The Best of Pakistan</h3>
        <p>
          We handpick tours/hotel car rentals from across Pakistan, and partner
          with some of Pakistan's best tour operators, so you can book Pakistan
          tour packages with confidence.
        </p>
        <h3>Outstanding Customer Service</h3>
        <p>
          Based in the United Arab Emirates and Pakistan, we have a dedicated call
          centre with online agents for a great customer support experience, and
          we have simplified the online booking and cancellations for a seamless
          experience. Our travel experts are always ready to help you organize your
          Pakistan holiday every step of the way. And when you're on your travels
          our office and team based in Pakistan will make sure you're well looked
          after too.
        </p>
      </div>
    </div>
  );
};

export default AboutUsPage;
