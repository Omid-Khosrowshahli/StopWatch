import './StopWatch.css';
import Timer from '../Timer/Timer';
import Buttons from '../Buttons/Buttons';
import { useState, useEffect } from 'react';

const StopWatch = () => {
  const [pause, setPause] = useState(true);
  const [active, setActive] = useState(false);
  const [time, setTime] = useState(0);

  useEffect(() => {
    let myInterval;

    if(!pause) {
        myInterval = setInterval(
          () => setTime((prevState) => prevState + 10), 10);
    }
    else {
      clearInterval(myInterval);
    }

    return () => clearInterval(myInterval);
  }, [pause, active]);

  const handleStart = () => {
    setActive(true);
    setPause(false);
  }

  const handlePause = () => {
    setPause(!pause);
  }

  const handleStop = () => {
    setActive(false);
    setTime(0);
    setPause(true);
  }

  return (
    <div>
      <Timer time={time} />
      <Buttons handleStart={handleStart} handlePause={handlePause}
        handleStop={handleStop} active={active} pause={pause}
      />
    </div>
  );
}

export default StopWatch;