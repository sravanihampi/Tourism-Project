import React from 'react';
import '../Styles/ForYou.css';
import Bali from '../Images/bali.webp';
import Swiss from '../Images/swiss.jpg';
import Rome from '../Images/rome.webp';
import Ayodhya from '../Images/ayodhya.webp';
import Kerala from '../Images/kerala.jpg';
import Dhwaraka from '../Images/dhwaraka.webp'

const ForYou = () => {
  // Sample data for personalized recommendations
  const recommendations = [
    {
      title: 'Explore the Beaches of Bali',
      description: 'Experience the stunning beaches, vibrant nightlife, and rich culture of Bali.',
      Image: Bali,
    },
    {
      title: 'Adventure in the Swiss Alps',
      description: 'Enjoy breathtaking views and thrilling adventures in the Swiss Alps.',
      Image: Swiss,
    },
    {
      title: 'Discover the History of Rome',
      description: 'Visit the historic landmarks and indulge in the delicious cuisine of Rome.',
      Image: Rome,
    },
    {
      title: 'Discover the History of Ayodhya',
      description: 'Visit the historic landmarks and indulge History of Lord Rama.',
      Image: Ayodhya,
    },
    {
      title: 'Explore The Beauty Of Kerala ',
      description: 'Enjoy The Beautiful Water Ways & Pleasant Nature .',
      Image: Kerala,
    },
    {
      title: 'Discover The History Of Ancient Dhwaraka',
      description: 'Visit the historic landmarks and indulge History of Lord Srikrishna.',
      Image: Dhwaraka,
    }
  ];

  return (
    <div className="foryou-container">
      <h1>Personalized Recommendations For You</h1>
      <div className="recommendations">
        {recommendations.map((recommendation, index) => (
          <div className="recommendation" key={index}>
            <img src={recommendation.Image} alt={recommendation.title} />
            <h2>{recommendation.title}</h2>
            <p>{recommendation.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ForYou;