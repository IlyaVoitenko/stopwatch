import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  miliseconds: 0,
  seconds: 0,
  isStart: false,
  isReset: false,
};

export const stopwatchSlice = createSlice({
  name: "stopwatch",
  initialState,
  reducers: {
    setMiliseconds: (state, action) => {
      state.miliseconds = action.payload;
    },
    setSeconds: (state, action) => {
      state.seconds = action.payload;
    },
    setIsStart: (state) => {
      state.isStart = !state.isStart;
    },
    setIsReset: (state) => {
      state.isReset = !state.isReset;
    },
  },
});

export const { setMiliseconds, setSeconds, setIsStart, setIsReset } =
  stopwatchSlice.actions;

export default stopwatchSlice.reducer;
