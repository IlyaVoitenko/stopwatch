export const handleStopwatchInterval = (time, setTime, isStart) => {
  let intervalId;
  if (isStart) {
    intervalId = setInterval(() => setTime(time + 1), 10);
  }
  return () => clearInterval(intervalId);
};
