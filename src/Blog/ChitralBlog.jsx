import React, { useState } from 'react';
import chitral from '../assets/chitral.webp';
import './Blog.css';

const ChitralBlog = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleReadMore = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="blog-entry">
      <div className="blog-image">
        <img src={chitral} alt="Chitral Valley" />
      </div>
      <div className="blog-content">
        <h1>Chitral Valley Tour: Why You Should Go?</h1>
        <p>
          Are you planning a tour of the Northern areas of Pakistan? If yes, then Chitral Valley is one
          of the most beautiful yet underrated travel destinations in Pakistan for you to choose from.
          The valley is located in the northernmost part of Khyber Pakhtunkhwa province and is surrounded by towering mountains,
          crystal-clear rivers, and alpine forests. If you're someone who's craving an adventure-packed vacation, then Chitral Valley is the perfect destination for you.
          Here are some reasons why you should go on a Chitral Valley tour.
        </p>
        {isExpanded && (
          <>
            <h2>Scenic Beauty</h2>
            <p>Chitral Valley boasts some of the most awe-inspiring landscapes in Pakistan.
              The valley is a photographer's paradise with snow-capped mountains,
              crystal-clear rivers, and shimmering lakes. Some of the most popular
              picturesque spots in Chitral are Shandur Pass (the highest polo ground in the world),
              Bamburet Valley (home to the Kalash tribe), and Garam Chashma (a hot spring resort).
              Every destination in Chitral is breathtaking and will propel you to keep visiting once a year.</p>
            <h2>Unique Culture</h2>
            <p>Chitral Valley is home to a diverse range of ethnic groups, each with its
              unique traditions and customs. The Kalash tribe is one of the most famous,
              known for its vibrant festivals and colorful embroidery. Their villages
              are located in the Bamburet Valley and can only be accessed by jeep.
              The people of Chitral are extremely hospitable and love to share
              stories about their culture and traditions.</p>
            <h2>Adventure Sports</h2>
            <p>For adrenaline junkies, Chitral offers a wide range of adventure sports,
              such as trekking, mountaineering, rafting, paragliding, and skiing.
              The valley is surrounded by towering peaks such as Tirich Mir,
              the highest peak in the Hindu Kush mountain range. The Shandur
              Pass polo ground is also a popular destination for trekkers
              and hikers. So, if you're someone who loves adventurous sports,
              then Chitral Valley is the perfect destination for you to travel to. </p>
            <h2>Rich Heritage</h2>
            <p>The Chitral Valley has a rich history and is home to many ancient heritage sites.
              The Chitral Fort was built in the 14th century and is a testament to the region's
              strategic importance. The fort has been used as a political and military stronghold
              by various rulers over the centuries. The region is also famous for the Khojakhel
              dynasty, which ruled over Chitral for over 400 years.</p>
            <h2>Eco-Friendly Tourism</h2>
            <p>Chitral Valley is one of the few travel destinations in Pakistan that has managed
              to maintain its natural beauty and environment. Eco-friendly tourism and sustainable
              development are being promoted in the region. The locals are being trained to offer
              ecotourism services which not only help the environment but also provide the local
              community with an additional source of income. With PakVoyager, you can rest
              assured that you will not leave carbon footprints.</p>
            <h2>Exquisite Local Cuisine</h2>
            <p>One of the best ways to experience a culture is through its cuisine.
              The Chitral Valley boasts a diverse range of traditional dishes that you must try.
              Some of the most popular dishes include Qalaibat, Pushur Tikki, Trout fish, and more.
              With so much to offer, Chitral Valley is a hidden gem that is waiting to be explored.
              The valley's natural beauty, unique culture, and thrilling adventures make it a must-visit
              destination for anyone looking for an unforgettable travel experience. It's time to pack
              your bags and embark on an adventure to Chitral Valley and discover Pakistan's most beautiful
              hidden treasure. Daunting to find affordable online Chitral tour packages? You have come to
              the right place! PakVoyager is the leading tour and travel company. So, what are you waiting for?
              Contact our professional and get the best Chitral tour packages at the most reasonable rates.</p>
          </>
        )}
        <button onClick={toggleReadMore} className="read-more-btn">
          {isExpanded ? 'Read Less' : 'Read More'}
        </button>
      </div>
    </div>
  );
};

export default ChitralBlog;
