// Props vs state
// Props: data passed from parent to chlid component
//data comes from outside the component are read-only are used for passing data between components
// State: data managed inside a component
//belongs to the component itself
// can be modified/changed
//setter method is used to modify data

// Child component (uses props)

// Child component (uses props)


import { useState } from "react";

// Child component (uses props)
function Child({ title }) {
  return <p>Props: {title}</p>;
}

// Parent component (uses state)
export default function PropsState() {
  const [stateValue, setStateValue] = useState("Local State");

  return (
    <div>
      <h3>Props vs State</h3>

      {/* Props Example */}
      <Child title="Parent Data" />

      {/* State Example */}
      <p>State: {stateValue}</p>

      {/* Update State */}
      <button onClick={() => setStateValue("Updated State 🚀")}>
        Change State
      </button>
    </div>
  );
}

