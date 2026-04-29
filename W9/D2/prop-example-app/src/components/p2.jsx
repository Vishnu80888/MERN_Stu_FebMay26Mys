import React from "react";

// Child Component
function UserProfile({ username, skill }) {
  return (
    <div className="profile-card">
      <p><strong>User:</strong> {username}</p>
      <p><strong>Skill:</strong> {skill}</p>
    </div>
  );
}

// Parent Component
export function PropDestructuring() {
  return (
    <div className="container">
      <h2>Prop Destructuring</h2>

      <UserProfile username="Vishnu" skill="React" />
      <UserProfile username="Ravi" skill="Node.js" />
      <UserProfile username="Anjali" skill="MongoDB" />
    </div>
  );
}