import React, { useState } from "react";

export const UseMemo = () => {
  const [text, setText] = useState("");
  const [number, setNumber] = useState(0)
  

  const expensiveFunction = (n) => {
    console.log("function rerendered")
    let total = 0;
    for (let i = 0; i < n; i++) {
      total += i;
    }
    return total;
  };

  const sum = React.useMemo( () => expensiveFunction(number),[number]);
  
  return (
    <div>
      <input onChange={(e) => setText(e.target.value)} placeholder="enter a text" />
      <input onChange={(e) => setNumber(e.target.value)}
      type="number"
      value={number}
      placeholder="enter a number" />

      <span>Total: {sum}</span>
    </div>
  );
};
