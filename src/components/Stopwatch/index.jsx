import React, { useEffect, useState } from "react";
import StartStopStopwatch from "../StartStopStopwatch";
import { isStartSelector } from "../../store/selectors";
import { useSelector } from "react-redux";
import { handleStartStopStopwatch } from "../../utils/helpers/startStop";

const Stopwatch = () => {
  const isStart = useSelector(isStartSelector);
  const [time, setTime] = useState(0);
  const [milliseconds, setMilliseconds] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [hours, setHours] = useState(0);

  useEffect(() => {
    let intervalId;
    if (isStart) {
      intervalId = setInterval(
        () =>
          handleStartStopStopwatch(
            time,
            setTime,
            setMilliseconds,
            setSeconds,
            setMinutes,
            setHours
          ),
        10
      );
    }
    return () => clearInterval(intervalId);
  }, [isStart, time]);

  return (
    <div>
      {hours}h {minutes}m {seconds}s {milliseconds}
      <StartStopStopwatch />
    </div>
  );
};

export default Stopwatch;
