import './Timer.css';

const Timer = ({time}) => {
  return(
    <div className='timer'>
      {("0" + Math.floor((time/(60*1000))%60)).slice(-2)}
      <span>:</span>
      {("0" + Math.floor((time/1000)%60)).slice(-2)}
      <span>:</span>
      {("0" + Math.floor((time/10)%100)).slice(-2)}
    </div>
  );
}

export default Timer;