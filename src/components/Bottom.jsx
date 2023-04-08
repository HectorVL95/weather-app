import React from 'react';
import '../styles/Bottom.css'

const Bottom = () => {
  return (
    <section className='bottom'>
    <div className='properties'>
      <div className='feels'>
        <div className='value'>
          <p>81°F</p>
        </div>
        <div className='description'>
          <p>Feels Like</p>
        </div>
      </div>
      <div className='humid'>
        <div className='value'>
          <p>32%</p>
        </div>
        <div className='description'>
          <p>Humidity</p>
        </div>
      </div>
      <div className='wind-speed'>
      <div className='value'>
          <p>12 MPH</p>
        </div>
        <div className='description'>
          <p>Wind Speed</p>
        </div>
      </div>
    </div>
  </section>
  );
}

export default Bottom;