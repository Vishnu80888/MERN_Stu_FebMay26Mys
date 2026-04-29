import React from "react";

// Layout Component
function DrillLayout({ user }) {
  return (
    <div className="layout">
      <DrillSidebar user={user} />
    </div>
  );
}

// Sidebar
function DrillSidebar({ user }) {
  return (
    <aside className="sidebar">
      <DrillUserPanel user={user} />
    </aside>
  );
}

// User Panel
function DrillUserPanel({ user }) {
  return (
    <section className="user-panel">
      <ProfileAvatar user={user} />
    </section>
  );
}

// Avatar
function ProfileAvatar({ user }) {
  return (
    <img
      src={`/${user.name}.png`}
      alt={user.name}
      className="avatar"
    />
  );
}

// Parent Component
export function PropDrillingDemo() {
  const user = { name: "Vishnu" };

  return (
    <div>
      <h3>Problem: Prop Drilling</h3>
      <DrillLayout user={user} />
    </div>
  );
}