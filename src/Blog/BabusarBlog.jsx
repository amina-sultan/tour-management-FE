import React, { useState } from 'react';
import babusarTopImage from '../assets/babusar.jpg';
import './Blog.css';

const BabusarBlog = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleReadMore = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="blog-entry">
      <div className="blog-image">
        <img src={babusarTopImage} alt="Babusar Top" />
      </div>
      <div className="blog-content">
        <h1>Babusar Top: Where Heaven Meets Earth</h1>
        <p>
          Babusar Top, situated in the majestic Himalayan range, stands as a gateway between Kaghan Valley and Gilgit-Baltistan in Pakistan. At an elevation of 4,173 meters (13,691 feet) above sea level, Babusar Top offers visitors a glimpse into the breathtaking beauty of northern Pakistan. Here’s why a visit to Babusar Top should be on your travel itinerary:
        </p>
        {isExpanded && (
          <>
            <h2>Awe-Inspiring Panoramic Views</h2>
            <p>
              Standing atop Babusar Top, you are treated to panoramic views of snow-capped peaks, verdant valleys, and meandering streams below. The pass provides a vantage point from which to admire Nanga Parbat, the ninth-highest mountain in the world, and the surrounding Himalayan giants that pierce the sky. Sunrise and sunset at Babusar Top paint the landscape in hues of gold and pink, creating a scene straight out of a postcard.
            </p>
            <h2>Tranquil Alpine Meadows</h2>
            <p>
              Surrounding Babusar Top are vast alpine meadows dotted with wildflowers during the summer months. These meadows offer a serene setting for picnics, photography, and simply soaking in the natural beauty. The air is crisp and clean, filled with the scent of juniper and pine trees that carpet the slopes.
            </p>
            <h2>Adventure Opportunities</h2>
            <p>
              For adventure enthusiasts, Babusar Top serves as a base for trekking and hiking expeditions into the nearby valleys and peaks. Treks to destinations like Fairy Meadows and Dudipatsar Lake start from Babusar Top, offering a blend of challenging trails and stunning landscapes. Whether you're an avid trekker or a casual hiker, Babusar Top promises an unforgettable adventure.
            </p>
          </>
        )}
        <button onClick={toggleReadMore} className="read-more-btn">
          {isExpanded ? 'Read Less' : 'Read More'}
        </button>
      </div>
    </div>
  );
};

export default BabusarBlog;
