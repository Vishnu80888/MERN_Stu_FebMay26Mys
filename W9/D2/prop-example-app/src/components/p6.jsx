import React from "react";

// Layout component
function DashboardLayout({ children }) {
  return <div className="layout">{children}</div>;
}

// Sidebar component
function AccountSidebar({ children }) {
  return <aside className="sidebar">{children}</aside>;
}

// User panel component
function UserInfoPanel({ children }) {
  return <div className="user-panel">{children}</div>;
}

// Leaf component (actual UI)
function ProfileAvatar({ user }) {
  return (
    <div>
      <p>👤 User: {user.name}</p>
    </div>
  );
}


// Parent component
export default function CompositionDemo() {
  const user = { name: "Vishnu" };

  return (
    <div>
      <h3>Composition Solution</h3>

      <DashboardLayout>
        <AccountSidebar>
          <UserInfoPanel>
            <ProfileAvatar user={user} />
          </UserInfoPanel>
        </AccountSidebar>
      </DashboardLayout>
    </div>
  );
}