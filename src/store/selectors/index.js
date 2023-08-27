export const millisecondsSelector = (state) => state.stopwatch.milliseconds;
export const secondsSelector = (state) => state.stopwatch.seconds;
export const minutesSelector = (state) => state.stopwatch.minutes;
export const hoursSelector = (state) => state.stopwatch.hours;

export const isResetSelector = (state) => state.stopwatch.isReset;
export const isStartSelector = (state) => state.stopwatch.isStart;
