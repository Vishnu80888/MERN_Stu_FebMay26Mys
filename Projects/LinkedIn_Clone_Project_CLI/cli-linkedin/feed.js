const { posts } = require("./posts");
const emitter = require("./events");

async function getFeed(user) {
  try {
    const feed = posts
      .filter(p => user.connections.includes(p.author))
      .sort((a, b) => b.timestamp - a.timestamp);

    emitter.emit("feedViewed");
    return feed;

  } catch (err) {
    emitter.emit("operationFailed", err.message);
  }
}

module.exports = { getFeed };