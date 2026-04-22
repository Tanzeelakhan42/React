import React, { useState } from "react";

const CounterComponent = () => {
  const [count, setCount] = useState(3);
  return (
    <div>
      <p>Counter - {count} </p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
    </div>
  );
};
export default CounterComponent;
