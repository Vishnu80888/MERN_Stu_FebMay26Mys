
// Container / Wrapper component
import React from "react";

// children is a specil React prop
//It holds nested JSX passed between component tags
function Container({ children }) {
  return (
    <div className="card">
      {children}
    </div>
  );
}

// Parent component
export function PropsChildren() {
  return (
    <>
      <Container>
        <h3>First child element in Nested Approach</h3>
        <p>This is an example of props.children usage.</p>
      </Container>
    </>
  );
}