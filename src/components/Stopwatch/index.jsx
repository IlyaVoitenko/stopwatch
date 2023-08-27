import React, { useEffect, useState } from "react";
import StartStopStopwatch from "../StartStopStopwatch";
import { isStartSelector } from "../../store/selectors";
import { useSelector } from "react-redux";
import { handleStopwatchInterval } from "../../utils/helpers/startStop";

const Stopwatch = () => {
  const isStart = useSelector(isStartSelector);
  const [time, setTime] = useState(0);
  const hours = Math.floor(time / 360000);
  const minutes = Math.floor((time % 360000) / 6000);
  const seconds = Math.floor((time % 6000) / 100);
  const milliseconds = time % 100;

  useEffect(() => {
    return handleStopwatchInterval(time, setTime, isStart);
  }, [isStart, time]);

  return (
    <div>
      {hours}h {minutes}m {seconds}s {milliseconds}
      <StartStopStopwatch />
    </div>
  );
};

export default Stopwatch;
