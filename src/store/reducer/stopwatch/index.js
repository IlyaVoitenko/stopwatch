import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isStart: false,
};

export const stopwatchSlice = createSlice({
  name: "stopwatch",
  initialState,
  reducers: {
    setIsStart: (state) => {
      state.isStart = !state.isStart;
    },
  },
});

export const { setIsStart } = stopwatchSlice.actions;

export default stopwatchSlice.reducer;
