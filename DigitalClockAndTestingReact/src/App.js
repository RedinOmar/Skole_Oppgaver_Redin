import { useState, useEffect } from 'react';
import ConfettiExplosion from 'react-confetti-explosion';
import Explosion from './Explosion';

import './App.css';

function App() {

  //let time = date.getTime();

  // Declare a new state variable, which we'll call "NewCurrentTime"
  // currentTime = nåværende tid
  // setCurrentTime = Nåværende tid, men den er en funksjon som oppdaterer seg med ny state.
  const [currentTime, setCurrentTime] = useState(10);
  const [isExploding, setIsExploding] = useState(false);

  useEffect(() => {
     const interval = setInterval(() => {
      
      setCurrentTime(currentTime => currentTime - 1);

      if (currentTime == 1) {
        setIsExploding(true);
      } else if (currentTime == 0) {
        setCurrentTime(10);
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
      {isExploding && <Explosion />}
      <div></div>
      </header>
    </div>
  );
}

export default App;
