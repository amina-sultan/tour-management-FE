import React, { useState } from 'react';
import kashmir from '../assets/Kashmir.webp';
import './Blog.css';

const KashmirBlog = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleReadMore = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="blog-entry">
      <div className="blog-image">
        <img src={kashmir} alt="Kashmir Valley" />
      </div>
      <div className="blog-content">
        <h1>Kashmir Valley: Paradise on Earth</h1>
        <p>
          Kashmir Valley, often referred to as "Paradise on Earth," is known for its breathtaking landscapes,
          serene lakes, and vibrant culture. Located in the northern part of the Indian subcontinent,
          it attracts tourists from all over the world. Here are some reasons why Kashmir should be on your travel list.
        </p>
        {isExpanded && (
          <>
            <h2>Natural Beauty</h2>
            <p>
              Kashmir is surrounded by the majestic Himalayas, offering picturesque views and a tranquil atmosphere.
              The Dal Lake, Pahalgam, and Gulmarg are some of the iconic destinations that showcase its natural beauty.
            </p>
            <h2>Cultural Richness</h2>
            <p>
              The valley is known for its rich cultural heritage, reflected in its festivals, handicrafts, and traditional cuisine.
              The warmth and hospitality of the Kashmiri people add to the charm of visiting this beautiful region.
            </p>
            <h2>Adventure and Recreation</h2>
            <p>
              For adventure enthusiasts, Kashmir offers trekking, skiing, and boating opportunities in its scenic surroundings.
              The Mughal Gardens, Shankaracharya Temple, and Hazratbal Shrine are also popular attractions for history and culture buffs.
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

export default KashmirBlog;
