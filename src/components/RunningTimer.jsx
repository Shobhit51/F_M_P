import React, { useState, useEffect } from 'react';
import './run.css'; // Import CSS for styling

function RunningTimer() {
  const [timer, setTimer] = useState(0); // Timer value in seconds
  const [running, setRunning] = useState(false); // Timer running state
  const [inputTime, setInputTime] = useState(''); // Input field for user to specify starting time
  const [timeUnit, setTimeUnit] = useState('seconds'); // Unit for time input
  const [totalTime, setTotalTime] = useState(0); // Total time entered by the user

  useEffect(() => {
    let intervalId;

    if (running && timer > 0) {
      intervalId = setInterval(() => {
        setTimer((prevTimer) => prevTimer - 1);
      }, 1000); // Update timer every second
    } else if (timer === 0) {
      // Stop the timer when it reaches zero
      setRunning(false);
    }

    return () => clearInterval(intervalId);
  }, [running, timer]);

  const startTimer = () => {
    if (inputTime) {
      let totalSeconds;
      if (timeUnit === 'hours') {
        totalSeconds = parseInt(inputTime) * 3600;
      } else if (timeUnit === 'minutes') {
        totalSeconds = parseInt(inputTime) * 60;
      } else {
        totalSeconds = parseInt(inputTime);
      }

      if (totalSeconds > 0) {
        setTimer(totalSeconds); // Start the timer from the specified time
        setTotalTime(totalSeconds); // Set total time entered by the user
        setRunning(true);
      }
    }
  };

  const stopTimer = () => {
    setRunning(false);
  };

  const resetTimer = () => {
    setTimer(0); // Reset timer to zero
    setRunning(false);
    setInputTime(''); // Clear the input field
    setTotalTime(0); // Reset total time
  };

  const handleChange = (e) => {
    setInputTime(e.target.value);
  };

  const handleUnitChange = (e) => {
    setTimeUnit(e.target.value);
  };

  const formatTime = (timeInSeconds) => {
    const hours = Math.floor(timeInSeconds / 3600);
    const minutes = Math.floor((timeInSeconds % 3600) / 60);
    const seconds = timeInSeconds % 60;

    return `${hours < 10 ? '0' + hours : hours}:${minutes < 10 ? '0' + minutes : minutes}:${seconds < 10 ? '0' + seconds : seconds}`;
  };

  const calculatePercentage = () => {
    if (totalTime > 0) {
      return ((timer / totalTime) * 100).toFixed(2);
    } else {
      return 0;
    }
  };
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top of the page when component mounts
}, []); 

  return (
    <div className={`running-timer ${running ? 'running' : ''}`}>
      <div className="timer-container">
        <div className="timer-display">
          
          <h1>{formatTime(timer)}</h1>
          <div className="input-container">
            <input type="number" value={inputTime} onChange={handleChange} placeholder="Enter Time" />
            <select value={timeUnit} onChange={handleUnitChange}>
              <option value="hours">Hours</option>
              <option value="minutes">Minutes</option>
              <option value="seconds">Seconds</option>
            </select>
          </div>
        </div>
        <div className="controls">
          <button onClick={startTimer} className="start-btn" disabled={running}>Start</button>
          <button onClick={stopTimer} className="stop-btn" disabled={!running}>Stop</button>
          <button onClick={resetTimer} className="reset-btn">Reset</button>
        
        </div>
        <div className="visual-indicator">
          <div className="progress-ring">
            <div className="progress-circle" style={{strokeDashoffset: `${100 - calculatePercentage()}%`}}></div>
          </div>
          <div className="percentage">{calculatePercentage()}%</div>
        </div>
    
      </div>
    </div>
  );
}

export default RunningTimer;



// import React, { useState, useEffect } from 'react';
// import './Home.css'

// function RunningTimer() {
//   const [timer, setTimer] = useState(0); // Timer value in seconds
//   const [running, setRunning] = useState(false); // Timer running state
//   const [inputTime, setInputTime] = useState(''); // Input field for user to specify starting time
//   const [timeUnit, setTimeUnit] = useState('seconds'); // Unit for time input

//   useEffect(() => {
//     let intervalId;

//     if (running && timer > 0) {
//       intervalId = setInterval(() => {
//         setTimer((prevTimer) => prevTimer - 1);
//       }, 1000); // Update timer every second
//     } else if (timer === 0) {
//       // Stop the timer when it reaches zero
//       setRunning(false);
//     }

//     return () => clearInterval(intervalId);
//   }, [running, timer]);

//   const startTimer = () => {
//     if (inputTime) {
//       let totalSeconds;
//       if (timeUnit === 'hours') {
//         totalSeconds = parseInt(inputTime) * 3600;
//       } else if (timeUnit === 'minutes') {
//         totalSeconds = parseInt(inputTime) * 60;
//       } else {
//         totalSeconds = parseInt(inputTime);
//       }

//       if (totalSeconds > 0) {
//         setTimer(totalSeconds); // Start the timer from the specified time
//         setRunning(true);
//       }
//     }
//   };

//   const stopTimer = () => {
//     setRunning(false);
//   };

//   const resetTimer = () => {
//     setTimer(0); // Reset timer to zero
//     setRunning(false);
//     setInputTime(''); // Clear the input field
//   };

//   const handleChange = (e) => {
//     setInputTime(e.target.value);
//   };

//   const handleUnitChange = (e) => {
//     setTimeUnit(e.target.value);
//   };

//   const formatTime = (timeInSeconds) => {
//     const hours = Math.floor(timeInSeconds / 3600);
//     const minutes = Math.floor((timeInSeconds % 3600) / 60);
//     const seconds = timeInSeconds % 60;

//     return `${hours < 10 ? '0' + hours : hours}:${minutes < 10 ? '0' + minutes : minutes}:${seconds < 10 ? '0' + seconds : seconds}`;
//   };

//   return (
//     <div className={`running-timer ${running ? 'running' : ''}`}>
//       <div className="timer-container">
//         <div className="timer-display">
//           <h1>{formatTime(timer)}</h1>
//           <div className="input-container">
//             <input type="number" value={inputTime} onChange={handleChange} placeholder="Enter Time" />
//             <select value={timeUnit} onChange={handleUnitChange}>
//               <option value="hours">Hours</option>
//               <option value="minutes">Minutes</option>
//               <option value="seconds">Seconds</option>
//             </select>
//           </div>
//         </div>
//         <div className="visual-indicator"></div> {/* Visual indicator */}
      
//         <div className="controls">
//           <button onClick={startTimer} className="start-btn" disabled={running}>Start</button>
//           <button onClick={stopTimer} className="stop-btn" disabled={!running}>Stop</button>
//           <button onClick={resetTimer} className="reset-btn">Reset</button>
//         </div>
//         <div className="visual-indicator"></div>
//       </div>
//     </div>
//   );
// }

// export default RunningTimer;
// // import React, { useState, useEffect } from 'react';

// // function RunningTimer() {
// //   const [timer, setTimer] = useState(0); // Timer value in seconds
// //   const [running, setRunning] = useState(false); // Timer running state
// //   const [inputTime, setInputTime] = useState(''); // Input field for user to specify starting time
// //   const [timeUnit, setTimeUnit] = useState('seconds'); // Unit for time input

// //   useEffect(() => {
// //     let intervalId;

// //     if (running && timer > 0) {
// //       intervalId = setInterval(() => {
// //         setTimer((prevTimer) => prevTimer - 1);
// //       }, 1000); // Update timer every second
// //     } else if (timer === 0) {
// //       // Stop the timer when it reaches zero
// //       setRunning(false);
// //     }

// //     return () => clearInterval(intervalId);
// //   }, [running, timer]);

// //   const startTimer = () => {
// //     if (inputTime) {
// //       let totalSeconds;
// //       if (timeUnit === 'hours') {
// //         totalSeconds = parseInt(inputTime) * 3600;
// //       } else if (timeUnit === 'minutes') {
// //         totalSeconds = parseInt(inputTime) * 60;
// //       } else {
// //         totalSeconds = parseInt(inputTime);
// //       }

// //       if (totalSeconds > 0) {
// //         setTimer(totalSeconds); // Start the timer from the specified time
// //         setRunning(true);
// //       }
// //     }
// //   };

// //   const stopTimer = () => {
// //     setRunning(false);
// //   };

// //   const resetTimer = () => {
// //     setTimer(0); // Reset timer to zero
// //     setRunning(false);
// //     setInputTime(''); // Clear the input field
// //   };

// //   const handleChange = (e) => {
// //     setInputTime(e.target.value);
// //   };

// //   const handleUnitChange = (e) => {
// //     setTimeUnit(e.target.value);
// //   };

// //   const formatTime = (timeInSeconds) => {
// //     const hours = Math.floor(timeInSeconds / 3600);
// //     const minutes = Math.floor((timeInSeconds % 3600) / 60);
// //     const seconds = timeInSeconds % 60;

// //     return `${hours < 10 ? '0' + hours : hours}:${minutes < 10 ? '0' + minutes : minutes}:${seconds < 10 ? '0' + seconds : seconds}`;
// //   };

// //   return (
// //     <div className="inverse-timer">
// //       <br />
// //       <br />  <br />  <br />  <br />  <br />
// //       <div className="timer-display">
// //         <h1>{formatTime(timer)}</h1>
// //         <div className="input-container">
// //           <input type="number" value={inputTime} onChange={handleChange} placeholder="Enter Time" />
// //           <select value={timeUnit} onChange={handleUnitChange}>
// //             <option value="hours">Hours</option>
// //             <option value="minutes">Minutes</option>
// //             <option value="seconds">Seconds</option>
// //           </select>
// //         </div>
// //       </div>
// //       <div className="controls">
// //         <button onClick={startTimer}>Start</button>
// //         <button onClick={stopTimer}>Stop</button>
// //         <button onClick={resetTimer}>Reset</button>
// //       </div>
// //     </div>
// //   );
// // }


// // export default RunningTimer
