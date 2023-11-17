const { kafka } = require("./client");
const readline = require("readline");

//Console interface creation
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

async function init() {
  const producer = kafka.producer();

  console.log("Connecting Producer");
  await producer.connect();
  console.log("Producer Connected Successfully");

  rl.setPrompt("> ");
  rl.prompt();

  rl.on("line", async function (line) {
    //Sending to order-update
    const [orderId, status, location] = line.split(" ");
    await producer.send({
      topic: "order-updates",
      messages: [
        {
          partition: location.toLowerCase() === "bangalore" ? 0 : 1,
          key: "order-update",
          value: JSON.stringify({ 
            "orderId": orderId,
            "status": status,
            "location": location
        }),
        },
      ],
    });
  }).on("close", async () => {
    await producer.disconnect();
  });
}

init();