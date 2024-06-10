import { useState } from "react";
import "./App.css";

function App() {
  const [color, setcolor] = useState("white");

  return (
    <div className= "w-full h-screen"  style={{backgroundColor: color}}>

      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-4 shadow-lg bg-white rounded-full px-3 py-1" >
          <button onClick={() => setcolor("red")} className="outline-none px-3 py-1 rounded-full text-white shadow-lg" style={{backgroundColor : "red"}}>Red</button>
          <button onClick={() => setcolor("green")} className="outline-none px-3 py-1 rounded-full text-white shadow-lg" style={{backgroundColor : "green"}}>Green</button>
          <button onClick={() => setcolor("blue")} className="outline-none px-3 py-1 rounded-full text-white shadow-lg" style={{backgroundColor : "blue"}}>Blue</button>
          <button onClick={() => setcolor("yellow")} className="outline-none px-3 py-1 rounded-full text-white shadow-lg" style={{backgroundColor : "yellow"}}>Yellow</button>
          <button onClick={() => setcolor("crimson")} className="outline-none px-3 py-1 rounded-full text-white shadow-lg" style={{backgroundColor : "crimson"}}>Crimson</button>
          <button onClick={() => setcolor("orange")} className="outline-none px-3 py-1 rounded-full text-white shadow-lg" style={{backgroundColor : "orange"}}>Orange</button>
          <button onClick={() => setcolor("pink")} className="outline-none px-3 py-1 rounded-full text-white shadow-lg" style={{backgroundColor : "pink"}}>Pink</button>
          <button onClick={() => setcolor("coral")} className="outline-none px-3 py-1 rounded-full text-white shadow-lg" style={{backgroundColor : "coral"}}>Coral</button>
          <button onClick={() => setcolor("violet")} className="outline-none px-3 py-1 rounded-full text-white shadow-lg" style={{backgroundColor : "violet"}}>Violet</button>
          <button onClick={() => setcolor("grey")} className="outline-none px-3 py-1 rounded-full text-white shadow-lg" style={{backgroundColor : "grey"}}>Grey</button>
        </div>
      </div>
    </div>
  );
}

export default App;
