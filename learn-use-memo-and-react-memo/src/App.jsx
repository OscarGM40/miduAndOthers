import { useState } from "react";
import "./App.css";
import ExpensiveComponent from "./ExpensiveComponent";
import { UseMemo } from "./UseMemo";
import { UseMemoWithUseEffect } from "./UseMemoWithUseEffect";

function App() {
  const [text, setText] = useState("");

  return (
    <div>
      <input type="text" onChange={(e) => setText(e.target.value)} placeholder="enter a text" />

      {/* <UseMemo /> */}
      {/* <UseMemoWithUseEffect /> */}
      <ExpensiveComponent />
    </div>
  );
}

export default App;
