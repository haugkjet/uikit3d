import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Scene } from "../Scene";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App" style={{ width: "100vw", height: "100vh" }}>
      <Scene />
    </div>
  );
}

export default App;
