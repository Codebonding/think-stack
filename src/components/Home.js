import React, { useEffect } from 'react';
import './home.css';

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="home-container">
      <video autoPlay loop muted playsInline className="bg-video">
        <source src="/assets/bg.webm" type="video/webm" />
        Your browser does not support the video tag.
      </video>

      <div className="home-content">
        <img src='/assets/logo.png' className='think-logo' alt="Think Logo" />
        <p className="home-description">
         Think Xag Tek is transforming the UAV industry with advanced drones for agriculture, surveillance, and defense. We design and manufacture batteries, flight controllers, and accessories in-house for superior quality, durability, and performance. Our custom solutions meet specialized industry needs, earning recognition in agriculture, defense, and logistics. Proudly Made in the USA, we deliver innovative, reliable, and cost-effective UAV technology while pushing the boundaries of drone innovation.
        </p>
      </div>
      
        <img src="/assets/mo.webp" alt="Made in Usa" className="made-in-usa" />
    </div>
  );
};

export default Home;