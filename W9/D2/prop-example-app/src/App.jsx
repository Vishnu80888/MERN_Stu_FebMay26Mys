import React from "react";
import './App.css'
// import { WelcomeCard } from "./components/p1";
// import { PropDestructuring } from "./components/p2";
// import { PropsChildren } from "./components/p3";
// import { PropDrillingDemo } from "./components/p4";
import { SharedStateParent } from "./components/p5";

function App() {
  return (
    <div className="container">
      {/* <WelcomeCard/>  */}
      {/* <PropDestructuring/>
      <PropsChildren/> */}
      {/* <PropDrillingDemo/> */}
      <SharedStateParent/>
    </div>
  );
}

export default App