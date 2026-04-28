import React, { useState } from "react";

const CounterComponent = () => {
  const initialValue = 3;
  const initialText = "Tanzeela";
  const [count, setCount] = useState(initialValue);
  const [value, setValue] = useState(initialText);
  const [show, setShow] = useState(true);
  const handleReset = () => {
    setCount(initialValue);
    setValue(initialText);
  };

  return (
    <div>
      <h2>Hello from {value}</h2>
      <h3>
        Counter value ={" "}
        {count % 2 === 0 ? `${count} is even` : `${count} is odd`}
      </h3>
      <button onClick={() => setCount((prev) => prev + 1)}>Increment</button>
      <button onClick={() => setCount((prev) => (prev > 0 ? prev - 1 : 0))}>
        Decrement
      </button>
      <button onClick={() => setValue("React")}>Change text</button>
      <button onClick={handleReset}>Reset</button>
      <button onClick={() => setShow((prev) => !prev)}>
        {show ? "Hide" : "Show"}
      </button>
      {show && <p>I am visible</p>}
    </div>
  );
};
export default CounterComponent;
