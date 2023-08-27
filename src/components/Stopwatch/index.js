import React from "react";
import { secondsSelector, milisecondsSelector } from "../../store/selectors";
import { useSelector } from "react-redux";
import StartStopStopwatch from "../StartStopStopwatch";

const Stopwatch = () => {
  const seconds = useSelector(secondsSelector);
  const miliseconds = useSelector(milisecondsSelector);

  return (
    <div>
      {seconds}s {miliseconds}
      <StartStopStopwatch />
    </div>
  );
};

export default Stopwatch;
