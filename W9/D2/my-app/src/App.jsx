import React from "react";

import './App.css'
import {FunctionName} from"./components/FunctionalCompOne.jsx";
import {FunctionalComponentsBasic} from"./components/FunctionalComponentsBasics.jsx";
import {ClassComponentsBasics} from"./components/ClassComponentsBasics.jsx";
import {FunctionComp} from"./components/FunctionalComponentsAdv.jsx";
import {ClassComponentState} from"./components/ClassComponentState.jsx";
function App() {
  return (
    //  Fragment in react :<> </>
    <>
    <FunctionName/> {/* Component name */}
    <FunctionalComponentsBasic/> 
    <ClassComponentsBasics/>
    <FunctionComp/>
    <ClassComponentState/>

      
    
    </>
  )
}

export default App
