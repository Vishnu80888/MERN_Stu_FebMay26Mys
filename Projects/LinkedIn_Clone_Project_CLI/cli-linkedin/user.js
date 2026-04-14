let users = [];
let currentUser = null;
let id = 1;

function createUser(name, headline) {
  const user = {
    id: id++,
    name,
    headline,
    skills: [],
    experience: [],
    education: [],
    connections: []
  };
  users.push(user);
  currentUser = user;
  return user;
}

function loginUser(userId) {
  currentUser = users.find(u => u.id === userId);
  return currentUser;
}

function getCurrentUser() {
  return currentUser;
}

function getAllUsers() {
  return users;
}

module.exports = {
  createUser,
  loginUser,
  getCurrentUser,
  getAllUsers
};