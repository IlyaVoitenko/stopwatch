import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { isStartSelector } from "../../store/selectors";
import { setIsStart } from "../../store/reducer/stopwatch";

const StartStopStopwatch = () => {
  const dispatch = useDispatch();
  const isStart = useSelector(isStartSelector);

  return !isStart ? (
    <button onClick={() => dispatch(setIsStart())}>start</button>
  ) : (
    <button onClick={() => dispatch(setIsStart())}>stop</button>
  );
};

export default StartStopStopwatch;
