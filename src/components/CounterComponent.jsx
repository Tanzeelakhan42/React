import React, { useState } from "react";

const CounterComponent = () => {
  const [value, setValue] = useState("Tanzeela");
  const initialValue = 3;
  const [count, setCount] = useState(initialValue);
  return (
    <div>
      <h5>Hello from {value}</h5>
      <p>Counter Value= {count}</p>
      <button onClick={() => setValue("React")}>Change</button>
      <button onClick={() => setCount((prev) => prev + 1)}>Increment</button>
      <button onClick={() => setCount((prev) => (prev > 0 ? prev - 1 : 0))}>
        Deccrement
      </button>
      <button onClick={() => setCount(initialValue)}>Reset</button>
    </div>
  );
};
export default CounterComponent;
