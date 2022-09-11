import React from 'react';
import './styles.css'

const RightSide = () => {
  return (
    <>
      <div className='rightSide'>
        <div className='header'>
          Get 5% Cashback
        </div>
        <div className='body'>
          <p>from</p>
          <h2>AED 159</h2>
          <h4>AED 194</h4>
          <p>You save 18%</p>
          <div className='select-date'>select a date</div>
          <button>Check availability</button>
          <p className='footer'>BEST PRICE GUARANTEED</p>
        </div>
      </div>
      <div className='rightSide2'>
        <div className='header'>
          Why Headout?
        </div>
        <div className='body'>
          <p>Trusted platform used by 100K+ people, each month
            Get the lowest prices and last minute availability
            Discover and connect with 10,000+ experiences
          </p>
          <h2>AED 159</h2>
          <h4>AED 194</h4>
          <p>You save 18%</p>
        </div>
      </div>
    </>
  );
}

export default RightSide;
