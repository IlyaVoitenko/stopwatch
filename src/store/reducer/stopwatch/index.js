import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  milliseconds: 0,
  seconds: 0,
  minutes: 0,
  hours: 0,
  isStart: false,
  isReset: false,
};

export const stopwatchSlice = createSlice({
  name: "stopwatch",
  initialState,
  reducers: {
    setMilliseconds: (state) => {
      state.milliseconds = state.milliseconds + 1;
    },
    setSeconds: (state) => {
      state.seconds = state.seconds + 1;
    },
    setMinutes: (state) => {
      state.minutes = state.minutes + 1;
    },
    setHours: (state) => {
      state.hours = state.hours + 1;
    },
    setReset: (state) => {
      state.isReset = !state.isReset;
      state.milliseconds = 0;
      state.seconds = 0;
      state.minutes = 0;
      state.hours = 0;
    },
    setIsStart: (state) => {
      state.isStart = !state.isStart;
    },
  },
});

export const {
  setIsStart,
  setIsReset,
  setMilliseconds,
  setSeconds,
  setMinutes,
  setHours,
} = stopwatchSlice.actions;

export default stopwatchSlice.reducer;
