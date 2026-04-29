import React from "react";

// Props Basics (Child Component)
function WelcomeCard(props) {
  return (
    <div className="card">
      <h2>Hello, {props.name}</h2>
      <p>Role: {props.role}</p>
    </div>
  );
}

// Parent Component
export function PropBasics() {
  return (
    <>
      <WelcomeCard name="Vishnu" role="React Developer" />
      <WelcomeCard name="Developer" role="UI/UX Developer" />
    </>
  );
}