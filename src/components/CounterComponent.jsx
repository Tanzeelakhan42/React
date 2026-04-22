import React, { useState } from "react";

const CounterComponent = () => {
  const initialValue = 3;
  const [count, setCount] = useState(initialValue);
  const [val, setValue] = useState("Tanzeela");
  const [show, setShow] = useState(true);

  return (
    <div>
      <h2>Hello from {val}</h2>
      <h3>Counter value= {count} </h3>
      <button onClick={() => setCount((prev) => prev + 1)}>Increment</button>
      <button onClick={() => setCount((prev) => (prev > 0 ? prev - 1 : 0))}>
        Decrement
      </button>{" "}
      <button onClick={() => setValue("React")}>Change text</button>
      <button
        onClick={() => {
          setCount(initialValue);
          setValue("Tanzeela");
        }}
      >
        Reset
      </button>
      <button onClick={() => setShow(!show)}>{show ? "Hide" : "Show"}</button>
      {show && <p>I am visible</p>}
    </div>
  );
};
export default CounterComponent;
