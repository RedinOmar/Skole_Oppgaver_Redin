import logo from './logo.svg';
import { useState, useEffect } from 'react';
import ConfettiExplosion from "react-confetti-explosion";

import './App.css';

export default function App() {

  const [currentTime, setCurrentTime] = useState(10);
  const [isExploding, setIsExploding] = useState(false);

  useEffect (() => {

    const interval = setInterval(() => {
      setCurrentTime(currentTime => currentTime - 1);
      if (currentTime == 0) {
        setCurrentTime(10);
        setIsExploding(true);
      } else {
        setIsExploding(false);
      }
    }, 1000);
    return () => clearInterval(interval);
  } )
  
  return (
    <div className="App">
      <header className="App-header">
        {currentTime}
        {isExploding && <explosion />}
      </header>
    </div>
  );
}