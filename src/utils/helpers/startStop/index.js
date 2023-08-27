import {
  setMilliseconds,
  setSeconds,
  setMinutes,
  setHours,
} from "../../../store/reducer/stopwatch";

export function handleStartStopStopwatch(
  time,
  setTime,
  setMilliseconds,
  setSeconds,
  setMinutes,
  setHours
) {
  setTime(time + 1);
  setMilliseconds(time % 100);
  setSeconds(Math.floor((time % 6000) / 100));
  setMinutes(Math.floor((time % 360000) / 6000));
  setHours(Math.floor(time / 360000));
}
