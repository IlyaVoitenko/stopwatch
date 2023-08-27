import React from "react";

const ResetStopwatch = ({ setTime }) => {
  return <button onClick={() => setTime(0)}>reset</button>;
};

export default ResetStopwatch;
