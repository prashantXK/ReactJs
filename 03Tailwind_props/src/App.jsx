import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Card from "./components/Card";

function App() {
  const [count, setCount] = useState(0);
  let myObj = {
    username:"prashant",
    age:18,
  }

  let newArray = [1,2,3,4]

  return (
    <>
      <h1 className="bg-green-600 rounded-md p-4">tailwind is here!</h1>
     <Card username = "Kratos Gaming" btnText =  "click me"/>
     <Card username="God of War" />
    </>
  );
}

export default App;
