import { configureStore } from "@reduxjs/toolkit";
import stopwatchReducer from "./reducer/stopwatch";

export const store = configureStore({
  reducer: {
    stopwatch: stopwatchReducer,
  },
});

export default store;
