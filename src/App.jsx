import { useState } from "react";
import "./App.css";

function App() {
  const [color, setColor] = useState("olive");
  return (
    <div
      className=" flex justify-center items-end w-full h-screen duration-200 "
      style={{ backgroundColor: color }}
    >
      <div className="flex justify-center items-end items-center gap-5 bg-slate-100 p-3 w-41 rounded-full">
        <button
          className="bg-red-400 p-3 rounded-full shadow-3xl font-bold"
          onClick={() => setColor("red")}
        >
          Red
        </button>
        <button
          className="bg-green-400 p-3 rounded-full shadow-3xl font-bold"
          onClick={() => setColor("green")}
        >
          Green
        </button>
        <button
          className="bg-yellow-400 p-3 rounded-full shadow-3xl font-bold"
          onClick={() => setColor("yellow")}
        >
          Yello
        </button>
        <button
          className="bg-pink-400 p-3 rounded-full shadow-3xl font-bold"
          onClick={() => setColor("pink")}
        >
          Pink
        </button>
        <button
          className="bg-blue-400 p-3 rounded-full shadow-3xl font-bold"
          onClick={() => setColor("blue")}
        >
          Blue
        </button>
      </div>
    </div>
  );
}

export default App;
