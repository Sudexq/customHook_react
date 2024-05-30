import React, { useState } from "react";
import "./App.css";
import useCounter from "./useCounter";
import useTitle from "./useTitle";

function Counter() {
  const [num, increment, decrement, reset] = useCounter();
  useTitle(num);
  return (
    <div>
      <h2>Sayı {num}</h2>
      <button className="button" onClick={increment}>
        arttır
      </button>
      <button className="button" onClick={decrement}>
        azalt
      </button>
      <button className="button" onClick={reset}>
        sıfırla
      </button>
    </div>
  );
}

export default Counter;
