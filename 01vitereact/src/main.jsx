import React from "react";
import ReactDOM from "react-dom/client";
import App from './App.jsx'
// import {jsx as _jsx} from "/react/jsx-runtime.js"
import "./index.css";

function myApp() {
  return (
    <div>
      <h1>Custom App</h1>
    </div>
  );
}
// const ReactElement = {
//   type: "a",
//   props: {
//     href: "https://google.com",
//     target: "_blank",
//   },
//   children: "click me to visit google",
// };

// const anotherElement = (
//   <a href="https://google.com" target="_blank">
//     visit google
//   </a>
// );
const anotherUser  = "prashant"   //variable injection


const reactElement = React.createElement(         // bebbles injected   
  "a",
  { href: "https://netflix.com", target: "_blank" }, //attributes-------- 1) element 2)attribute 3)evaluated expression 
  "click me to visit netflix",
  anotherUser   //variable unjected
);

ReactDOM.createRoot(document.getElementById("root")).render(
<App/>
);
