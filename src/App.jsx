import { useEffect, useState } from 'react';
import './App.css';

const App = () => {
  let [counter, setCounter] = useState(0);
  let [seconds, setSeconds] = useState(0);
  let [minute, setMinute] = useState(0);
  let [hours, setHours] = useState(0);

  let [timerActive, setTimerActive] = useState(false);

  useEffect(() => {
    let interval;

    if (timerActive == true) {
      interval = setInterval(() => {
        setCounter((prevCounter) => {
          if (prevCounter === 60) {
            setSeconds((prevCounter2) => {
              if (prevCounter2 === 60) {
                setMinute((prevCounter3) => {
                  if (prevCounter3 === 60) {
                    setHours((prevCounter4) => prevCounter4 + 1);
                    return 0;
                  }
                  return prevCounter3 + 1;
                });
                return 0;
              }

              return prevCounter2 + 1;
            });
            return 0;
          }
          return prevCounter + 1;
        });
      });
    }

    return () => clearInterval(interval);
  }, [timerActive]);

  return (
    <div className="app-container">
      <h1> stop watch</h1>
      <span className="counterr">
        {hours} : {minute} : {seconds}
      </span>

      <div className="btn-container">
        <button
          onClick={() => {
            setTimerActive(true);
          }}
          className=" btn"
        >
          Start
        </button>

        <button
          onClick={() => {
            setTimerActive(false);
          }}
          className=" btn"
        >
          Stop
        </button>

        <button
          onClick={() => {
            setTimerActive(false);
            setCounter(0);
            setSeconds(0);
            setMinute(0);
            setHours(0);
            a;
          }}
          className=" btn"
        >
          reset
        </button>
      </div>
    </div>
  );
};

export default App;
