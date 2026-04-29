import React from "react";
import "./App.css";
// import { WelcomeCard } from "./components/p1";
// import { PropDestructuring } from "./components/p2";
// import { PropsChildren } from "./components/p3";
// import { PropDrillingDemo } from "./components/p4";
// import { SharedStateParent } from "./components/p5";
// import { CompositionDemo } from "./components/p6";
// import { ObjectsAndArrayProps } from "./components/p7";
// import { PropsImmutability } from "./components/p8";
import { FunctionProps } from "./components/p10";

import PropsState from "./components/p9"; // ✅ fixed

function App() {
  return (
    <div className="container">
      <FunctionProps/>
    </div>
  );
}

export default App;