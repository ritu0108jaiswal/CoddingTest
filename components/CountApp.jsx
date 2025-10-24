import React, { useState, useEffect } from "react";

function CountApp() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    return setCount(count + 1);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prevCount) => {
        if (prevCount >= 20) {
          return 0;
        }
        return prevCount + 1;
      });
    }, 1000);
    return () => clearInterval(interval);
  }, []);
  return (
    <>
      <p>Current Count {count}</p>
      <button onClick={handleClick}>Clcik Me</button>
    </>
  );
}

export default CountApp;
