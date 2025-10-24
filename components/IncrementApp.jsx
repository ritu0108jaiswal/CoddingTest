import { Button } from "bootstrap";
import React, { useState } from "react";

function IncrementApp() {
  const [count, setCount] = useState(0);
  const handleIncrement = () => {
    setCount(count + 1);
  };
  const handleDec = () => {
    setCount(count - 1);
  };
  const handleReset = () => {
    setCount(0);
  };
  return (
    <div>
      {count}
      <br />
      <br />
      <br />
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDec}>Decrement</button>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
}

export default IncrementApp;
