const { posts } = require("./posts");

function getFeed(user) {
  return posts
    .filter(p => user.connections.includes(p.author))
    .sort((a, b) => b.timestamp - a.timestamp);
}

module.exports = { getFeed };