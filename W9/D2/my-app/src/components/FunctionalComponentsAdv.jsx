import {React} from "react";
//List rendering
const users = [
    { id:1,role:"Student"},
    { id:2,role:"Trainer"},
    { id:3,role:"Admin"},
    { id:4,role:"Developer"},
];

export function FunctionComp() {
  return (
    <div className="container">
      <h2 className="title">Functional Components</h2>

      {users.map((user) => (
        <p className="pass" key={user.id}>
          {user.role}
        </p>
      ))}
    </div>
  );
}