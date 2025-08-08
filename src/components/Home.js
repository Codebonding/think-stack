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
         Think Xag Tek, is revolutionizing the UAV industry with Advanced agricultural, surveillance, and military drones. We also manufacture batteries, flight controllers, and UAV accessories. In-house Manufacturing production with strict quality control and testing for
durability, performance, and compliance. Custom-built solutions for specialized industry needs. We have gained recognition for high-performance drone solutions in agriculture, defense, and logistics. Our commitment to innovation, reliability, and cost-effective UAV technology drives us forward. Proudly Made-in-USA, we deliver world-class UAV solutions with local expertise, ensuring superior quality and performance. As we grow, our focus remains on pushing UAV technology to new heights, providing advanced, indigenous solutions tailored for diverse industry needs.

        </p>
      </div>
      
        <img src="/assets/mo.webp" alt="Made in Usa" className="made-in-usa" />
    </div>
  );
};

export default Home;