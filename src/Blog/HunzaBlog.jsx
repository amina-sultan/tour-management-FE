import React, { useState } from 'react';
import hunza from '../assets/Hunza.webp';
import './Blog.css';

const HunzaBlog = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleReadMore = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="blog-entry">
      <div className="blog-image">
        <img src={hunza} alt="Hunza Valley" />
      </div>
      <div className="blog-content">
        <h1>Hunza Valley: A Gem of the North</h1>
        <p>
          Hunza Valley, located in the Gilgit-Baltistan region, is known for its stunning landscapes,
          vibrant culture, and hospitable people. This picturesque valley is surrounded by towering
          peaks and offers a unique blend of natural beauty and cultural heritage. Here are some reasons
          why Hunza Valley should be on your travel list.
        </p>
        {isExpanded && (
          <>
            <h2>Scenic Views</h2>
            <p>
              The valley is famous for its breathtaking scenery, including Rakaposhi, Ultar Sar, and Ladyfinger Peak.
              The views from the Karimabad town are particularly stunning, offering a panoramic sight of these majestic mountains.
            </p>
            <h2>Cultural Heritage</h2>
            <p>
              Hunza is home to the ancient Baltit and Altit forts, which are remarkable examples of traditional
              Hunza architecture. The local festivals, music, and dance reflect the rich cultural heritage of the region.
            </p>
            <h2>Friendly Locals</h2>
            <p>
              The people of Hunza are known for their hospitality. Visitors often feel welcomed and appreciated,
              making the experience even more memorable. The local cuisine is also a treat, with dishes like Chapshuro and Hunza bread.
            </p>
            <h2>Adventure Activities</h2>
            <p>
              For adventure enthusiasts, Hunza offers trekking, hiking, and rock climbing opportunities.
              The trek to the base camp of Rakaposhi is a popular choice among hikers.
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

export default HunzaBlog;
