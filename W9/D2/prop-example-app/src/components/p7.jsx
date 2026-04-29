import React from "react";

export function ObjectsAndArrayProps() {
  const user = {
    name: "Vishnu",
    role: "Developer",
  };

  const skills = ["React", "TailwindCSS", "Vite"];

  return (
    <div>
      <h3>Passing Object & Array Props</h3>

      <p>Name: {user.name}</p>
      <p>Role: {user.role}</p>

      <h4>Skills:</h4>
      <ul>
        {skills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
    </div>
  );
}