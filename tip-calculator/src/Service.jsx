/* eslint-disable react/prop-types */
import { useState } from "react";

function Service(props) {
  const [selectValue, setSelectValue] = useState(0);

  function onSelectChange(e) {
    const selectValueInput = e.target.value;
    setSelectValue(selectValueInput);
    console.log(selectValueInput);
    props.onSelectChange(selectValueInput);
  }

  return (
    <div>
      <p>How did you like the service?</p>
      <select
        name="service"
        id="service"
        value={selectValue}
        onInput={onSelectChange}
      >
        <option value="0">It was good (0%)</option>
        <option value="5">It was okay (5%)</option>
        <option value="10">It was good (10%)</option>
        <option value="20">Absolutely amazing (20%)</option>
      </select>
    </div>
  );
}

export default Service;
