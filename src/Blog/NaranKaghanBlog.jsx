import React, { useState } from 'react';
import naranKaghan from '../assets/narankaghan.webp';
import './Blog.css';

const NaranKaghanBlog = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleReadMore = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="blog-entry">
      <div className="blog-image">
        <img src={naranKaghan} alt="Naran Kaghan Valley" />
      </div>
      <div className="blog-content">
        <h1>Naran Kaghan Valley: Heaven on Earth</h1>
        <p>
          Naran Kaghan Valley, located in the Mansehra District of Khyber Pakhtunkhwa, Pakistan,
          is famous for its mesmerizing beauty, serene lakes, and lush green meadows. It is a popular
          tourist destination and a paradise for nature lovers. Here are some reasons why Naran Kaghan
          should be on your travel bucket list.
        </p>
        {isExpanded && (
          <>
            <h2>Spectacular Landscapes</h2>
            <p>
              Naran Kaghan offers breathtaking views of snow-capped peaks, including Malika Parbat
              and Makra Peak. Saiful Muluk Lake, Lulusar Lake, and Dudipatsar Lake are among the
              most picturesque lakes in the region, offering tranquil surroundings amidst towering
              mountains and lush forests.
            </p>
            <h2>Adventure and Exploration</h2>
            <p>
              The valley is a haven for adventure enthusiasts with opportunities for hiking,
              trekking, and trout fishing in its crystal-clear streams. Visitors can explore
              the enchanting Fairy Meadows, Babusar Pass, and Ansoo Lake, each offering
              unique experiences and panoramic views of the Himalayas.
            </p>
            <h2>Cultural Richness</h2>
            <p>
              Naran Kaghan Valley is rich in cultural heritage, with a diverse mix of ethnic
              communities like the Gujars, Kohistanis, and Kashmiris. The local cuisine,
              including specialties like Chapshuro and Sajji, reflects the region’s culinary
              traditions. The warmth and hospitality of the locals add to the charm of the valley.
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

export default NaranKaghanBlog;
