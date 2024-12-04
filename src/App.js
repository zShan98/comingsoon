import React, { useState, useEffect } from "react";
import './App.css';
import ProcomVideoLaptop from './Procom25_laptop.gif'
import ProcomVideoMobile from './Procom25_mobile.gif'

function App() {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  
  return (
    <div className='screen-bg'>
    <img className="bg-video" src={width > 450? ProcomVideoLaptop : ProcomVideoMobile}  alt='Procom25 Coming Soon'/>
    </div>
  );
}

export default App;
