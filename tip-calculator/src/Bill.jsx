/* eslint-disable react/prop-types */
import { useState } from "react";

function Bill(props) {
  const [inputValue, setInputValue] = useState("");

  function onBillChange(e) {
    const bill = e.target.value;
    console.log(bill);
    setInputValue(bill);
    props.onBillChange(bill);
  }

  return (
    <div>
      <p>How much was the bill?</p>
      <input type="number" value={inputValue} onChange={onBillChange} />
    </div>
  );
}

export default Bill;
