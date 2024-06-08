import "./App.css";
import { useState } from "react";

function App() {
  const [count, setcount] = useState(0);

  const addValue = () => {
   

    if (count < 20) {
      console.log("value added", Math.round(Math.random() * 100 + 1));
      setcount(count + 1);
    }
  };

  const removeValue = () => {
    if (count > 0) {
      setcount(count - 1);
    }
  };

  return (
    <>
      <h1>React JS</h1>
      <h2>Counter Value : {count}</h2>
      <button onClick={addValue}>Add Value</button>
      <br />
      <button onClick={removeValue}>Remove Value</button>
    </>
  );
}

export default App;
