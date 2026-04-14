const EventEmitter = require("events");
const chalk = require("chalk");

const emitter = new EventEmitter();

emitter.on("sessionStarted", () =>
  console.log(chalk.blue("Session Started"))
);

emitter.on("profileCreated", (user) =>
  console.log(chalk.green(`Profile created: ${user.name}`))
);

emitter.on("profileUpdated", () =>
  console.log(chalk.yellow("Profile updated"))
);

emitter.on("connectionRequested", () =>
  console.log(chalk.cyan("Connection request sent"))
);

emitter.on("connectionAccepted", () =>
  console.log(chalk.green("Connection accepted"))
);

emitter.on("postCreated", () =>
  console.log(chalk.green("Post created"))
);

emitter.on("postLiked", () =>
  console.log(chalk.blue("Post liked"))
);

emitter.on("feedViewed", () =>
  console.log(chalk.cyan("Feed viewed"))
);

emitter.on("operationFailed", (msg) =>
  console.log(chalk.red(msg))
);

module.exports = emitter;