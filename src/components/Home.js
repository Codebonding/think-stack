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
         Think Xag Tek is revolutionizing the UAV industry with advanced drones for agriculture, surveillance, and defense. We design and manufacture batteries, flight controllers, and UAV accessories in-house, ensuring strict quality control, durability, and performance.

Our custom-built solutions cater to specialized industry needs, earning us recognition for high-performance UAVs in agriculture, defense, and logistics. Proudly Made in the USA, we combine innovation, reliability, and cost-effectiveness to deliver world-class UAV technology. As we grow, we remain committed to pushing the boundaries of drone innovation with tailored, indigenous solutions.
        </p>
      </div>
      
        <img src="/assets/mo.webp" alt="Made in Usa" className="made-in-usa" />
    </div>
  );
};

export default Home;