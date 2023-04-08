import React, { useState } from 'react';
import '../styles/Top.css';
import axios from 'axios';
import App from '../App';

const Top = () => {


  return (
    <section className='top'>
        <input
        value={location}
        onChange={event => setLocation(event.target.value)}
        onKeyPress={searchLocation}
        className='location' 
        placeholder='Enter Location'/>
    </section>
  );
}

export default Top;