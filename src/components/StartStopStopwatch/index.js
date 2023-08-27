import React, { useState } from "react";
import { useSelector } from "react-redux";
import { isStartSelector } from "../../store/selectors";

const StartStopStopwatch = () => {
  const isStart = useSelector(isStartSelector);
  const [milisecondsUnits, setMilisecondsUnits] = useState(0);
  const [milisecondsDozens, setMilisecondsDozens] = useState(0);
  const [seconds, setSeconds] = useState("0");
  console.log(seconds, "s ", milisecondsDozens, milisecondsUnits);
  function handleStartStopStopwatch() {
    while (isStart) {
      setMilisecondsUnits(milisecondsUnits++);
      if (milisecondsUnits > 9) {
        setMilisecondsUnits(0);
        setMilisecondsDozens(milisecondsUnits++);
      }
      if (milisecondsDozens > 9 && milisecondsUnits > 9) {
        setMilisecondsUnits(0);
        setMilisecondsDozens(0);
        setSeconds(seconds++);
      }
    }
  }
  return isStart ? (
    <button onClick={() => handleStartStopStopwatch()}>start</button>
  ) : (
    <button onClick={() => handleStartStopStopwatch()}>stop</button>
  );
};

export default StartStopStopwatch;
