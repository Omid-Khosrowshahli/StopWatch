import './Buttons.css';

const Buttons = ({ handleStart, handlePause, handleStop, active, pause }) => {
  

  return (
    <>
      {active ?
        <>
          <button className="btn pause-btn" onClick={handlePause}>{pause ? 'continue' : 'pause'}</button>
          <button className="btn stop-btn" onClick={handleStop}>Stop</button>
        </> :
        <button className="btn start-btn" onClick={handleStart}>Start</button>
      }
    </>
  );
}

export default Buttons;