import React, { useState } from "react";

const CounterComponent = () => {
  const initialValue = 3;
  const [count, setCount] = useState(initialValue);
  return (
    <div>
      <p>Counter - {count} </p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
      <button onClick={() => setCount(initialValue)}>Reset Value</button>
    </div>
  );
};
export default CounterComponent;
