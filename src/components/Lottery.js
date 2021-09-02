import React, { useState } from "react";
import "../lotto.css";

function randomNumber() {
  return Math.ceil(Math.random() * 9);
}
function Lottery() {
  const [counter, setCounter] = useState([0, 0, 0]);
  const random = () => {
    setCounter([randomNumber(), randomNumber(), randomNumber()]);
  };
  return (
    <div>
      <h1 className="lottery-title">สามตัวงวดนี้คือ</h1>
      <div className="lottery-container">
        <div className="lottery-number" end={counter[0]}>
          {counter[0]}
        </div>
        <div className="lottery-number" end={counter[1]}>
          {counter[1]}
        </div>
        <div className="lottery-number" end={counter[2]}>
          {counter[2]}
        </div>
      </div>
      <button className="lottery-random-button" onClick={random}>
        Random
      </button>
    </div>
  );
}

export default Lottery;
