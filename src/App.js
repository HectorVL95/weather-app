import React, { useState } from 'react';
import axios from 'axios';
import './App.css';
import Top from './components/Top.jsx';
import Middle from './components/Middle.jsx';
import Bottom from './components/Bottom.jsx';

function App() {

  const [data,setData] = useState({})
  const [location, setLocation] = useState('')

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=c7b4a988cdb1eb38ab36c7eca1b1853f`

  const searchLocation = (event) =>{
    if (event.key === 'Enter'){
    axios.get(url).then((response) => {
      setData(response.data)
      console.log(response.data)
    })
    setLocation('')
  }
  }

  return (
    <div className="App">
      <Top/>
      <Middle/>
      <Bottom/>
    </div>
  );
}

export default App;

