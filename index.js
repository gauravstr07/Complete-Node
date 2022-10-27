let event = require("events");
let eventEmitter = new event.EventEmitter();

eventEmitter.on("speak", (name) => {
  console.log(`${name} is speaking`);
});

eventEmitter.emit("speak", "Akshu");
