import React, { useState } from 'react';
import gilgit from '../assets/gilgit.webp';
import './Blog.css';

const GilgitBlog = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleReadMore = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="blog-entry">
      <div className="blog-image">
        <img src={gilgit} alt="Gilgit Valley" />
      </div>
      <div className="blog-content">
        <h1>Gilgit Valley: Discover the Beauty</h1>
        <p>
          Gilgit Valley is renowned for its breathtaking landscapes, towering mountains, and rich cultural heritage.
          Located in the Gilgit-Baltistan region of Pakistan, it offers a serene escape for nature lovers and adventurers alike.
          Here are some reasons why you should consider visiting Gilgit Valley.
        </p>
        {isExpanded && (
          <>
            <h2>Natural Beauty</h2>
            <p>
              The valley is surrounded by some of the world's highest peaks, including Nanga Parbat and Rakaposhi,
              offering stunning views and excellent trekking opportunities.
            </p>
            <h2>Cultural Heritage</h2>
            <p>
              Gilgit is home to ancient forts, vibrant bazaars, and a diverse cultural tapestry that reflects its history and traditions.
              The hospitality of the locals and the richness of their customs add to the charm of visiting Gilgit Valley.
            </p>
            <h2>Adventure Activities</h2>
            <p>
              For adventure enthusiasts, Gilgit offers trekking, mountaineering, and river rafting in its pristine valleys and rivers.
              The Karakoram Highway, which passes through Gilgit, provides access to some of the most remote yet spectacular landscapes in the world.
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

export default GilgitBlog;
