import React from "react";
import "./WorkWithUs.css";
import bbb from "../assets/bbb.jpg";
const WorkWithUs = () => {
  return (
    <div className="work-with-us-container">
      <div className="work-with-us">
        <h3>Work With Us</h3>
        <img src={bbb} alt="Work With Us" className="work1-image" />
        <p style={{ textAlign: "left" }}>
          A little intro about our platform and how it works with vendors.
          <br />
          Channels we want to work with
          <br />
          <br />
          <ul>
            <li>Pakistan Tour Operators</li>
            <li>Hoteliers</li>
            <li>Activity Booking (Day Tours) (Traditional Restaurants)( Forts And Archeology) Musical Groups</li>
          </ul>
        </p>
        <h3>Tour Operators:</h3>
        <p>
          Unique Tours. Experienced in Foreign Tourists and Groups, Religious, Cultural, Expditions,
          Family And trophy hunting with good track record of customer services experience.PATO
          (Pakistan Association Of Tour Operator Registered) and DTS(Department of Tourism Service ) Registered.
        </p>
        <h3>Hoteliers/Accommodation:</h3>
        <p>
          We have technology platform available. Hoteliers or accommodation can get a direct booking
          with our platform with advance payment through credit card. We will process your payments.
        </p>
        <h3>Activity Booking:</h3>
        <p>
          You can host single day tours/hike/treks,  Forts and Archeology Sites, Musical and Cultural
          performance groups, food and traditional food activity bookings.
          Contact us if you wish to work with PakVoyager.
        </p>
      </div>
    </div>
  );
};

export default WorkWithUs;
