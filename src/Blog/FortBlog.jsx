import React, { useState } from 'react';
import baltitFortImage from '../assets/Fort.jpg';
import './Blog.css';

const BaltitFortBlog = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleReadMore = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="blog-entry">
      <div className="blog-image">
        <img src={baltitFortImage} alt="Ancient Baltit Fort" />
      </div>
      <div className="blog-content">
        <h1>Ancient Baltit Fort: A Glimpse into Hunza's History</h1>
        <p>
          The Ancient Baltit Fort, perched high above the Hunza Valley, is a testament to the rich cultural heritage and strategic importance of the region. Dating back over 700 years, this architectural marvel has stood witness to centuries of history, political changes, and cultural evolution in Hunza. Here’s why a visit to Baltit Fort should be on your travel itinerary:
        </p>
        {isExpanded && (
          <>
            <h2>Architectural Splendor</h2>
            <p>
              Baltit Fort is renowned for its intricate woodwork, craftsmanship, and strategic layout. Built with stones, mud, and timber, the fort blends seamlessly with the rugged landscape of the Karakoram Range. The fort's design reflects a blend of Tibetan, Central Asian, and Mughal architectural styles, making it a unique cultural gem.
            </p>
            <h2>Cultural Heritage</h2>
            <p>
              Home to the hereditary rulers of the Hunza state, Baltit Fort offers insights into the region's dynastic history and societal structure. The fort's rooms, corridors, and courtyards provide a glimpse into the daily life, traditions, and rituals of the rulers and their subjects. The fort also houses a museum showcasing artifacts, photographs, and historical documents related to Hunza's past.
            </p>
            <h2>Scenic Views</h2>
            <p>
              From Baltit Fort, visitors can enjoy panoramic views of the Hunza Valley, with its terraced fields, fruit orchards, and snow-capped peaks. The fort's strategic location offers commanding views of the surrounding Karakoram Range, including Ultar Sar, Rakaposhi, and Ladyfinger Peak, making it a photographer's paradise.
            </p>
            <h2>Restoration Efforts</h2>
            <p>
              In recent years, Baltit Fort has undergone extensive restoration and preservation efforts to safeguard its architectural integrity and cultural significance. The Aga Khan Trust for Culture has played a pivotal role in these efforts, ensuring that future generations can appreciate and learn from Hunza's historical legacy.
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

export default BaltitFortBlog;
