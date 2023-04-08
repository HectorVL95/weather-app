import React, { useState } from 'react';
import '../styles/Middle.css'

const Middle = () => {

  
  return (
    <section className='middle'>
        <div className='city-temp'>
          <div className='city'>
            <p>Culiacan</p>
          </div>
          <div className='temp'>
            <p>82°F</p>
          </div>
        </div>
        <div className='conditions'>
          <p>Clear</p>
        </div>
      </section>
  );
}

export default Middle;