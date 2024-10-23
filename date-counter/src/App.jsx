import { useState } from "react";

import "./App.css";
function App() {
  const [count, setCount] = useState(0);

  const date = new Date();
  date.setDate(date.getDate + count);

  // const [step, setStep] = useState(1);
  // const [date, setDate] = useState(new Date());

  // function handleStep() {
  //   setStep(step + 1);
  //   setDate(date.getTime() + step);
  // }

  // function handleCount() {
  //   let multiplier = 2;
  //   setCount(count * multiplier);
  //   multiplier++;
  //   setDate(date * count);
  // }

  return (
    <div>
      <div className="step-counter">
        <button
          onClick={() => {
            setCount((c) => c - 1);
          }}
        >
          -
        </button>
        <p>Count: {count}</p>
        <button
          onClick={() => {
            setCount((c) => c + 1);
          }}
        >
          +
        </button>
      </div>
      <div className="counter">
        <button>-</button>
        <p></p>
        <button>+</button>
      </div>
      <p>{date.toDateString()}</p>
    </div>
  );
}

export default App;
