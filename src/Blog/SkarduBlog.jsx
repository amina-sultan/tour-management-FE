import React, { useState } from 'react';
import skardu from '../assets/Skardu.webp';
import './Blog.css';

const SkarduBlog = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleReadMore = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="blog-entry">
      <div className="blog-image">
        <img src={skardu} alt="Skardu Valley" />
      </div>
      <div className="blog-content">
        <h1>Skardu Valley: Jewel of Pakistan</h1>
        <p>
          Skardu Valley, nestled in the heart of Gilgit-Baltistan, is renowned for its stunning landscapes,
          turquoise lakes, and rugged mountains. It is a paradise for adventurers and nature enthusiasts alike.
          Here are some reasons why Skardu should be on your travel bucket list.
        </p>
        {isExpanded && (
          <>
            <h2>Natural Splendor</h2>
            <p>
              Skardu is surrounded by some of the world's highest peaks, including K2 and Broad Peak.
              The beauty of places like Shangrila Resort, Satpara Lake, and Deosai National Park is unparalleled.
              Visitors can enjoy trekking, mountaineering, and camping in this breathtaking region.
            </p>
            <h2>Cultural Richness</h2>
            <p>
              The region is rich in culture, with influences from Tibetan and Central Asian traditions.
              Skardu is home to ancient Buddhist sites such as the Shigar Fort and the historic city of Skardu itself.
              The local cuisine, handicrafts, and festivals add to the cultural tapestry of the valley.
            </p>
            <h2>Adventure Activities</h2>
            <p>
              Adventure seekers can indulge in activities like rock climbing, river rafting, and paragliding
              amidst the majestic Karakoram Range. The cold desert of Skardu offers a unique landscape
              that contrasts sharply with its surrounding mountains.
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

export default SkarduBlog;
