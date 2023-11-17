const { kafka } = require("./client");

async function init() {
  const admin = kafka.admin();
  console.log("Admin connecting...");
  await admin.connect();
  console.log("Adming Connection Successful...");

  console.log("Creating Topic [order-updates]");
  await admin.createTopics({
    topics: [
      {
        topic: "order-updates",
        numPartitions: 2,
      },
    ],
  });
  console.log("Topic Created Success [order-updates]");

  console.log("Creating Topic [delivery-updates]");
  await admin.createTopics({
    topics: [
      {
        topic: "delivery-updates",
        numPartitions: 2,
      },
    ],
  });
  console.log("Topic Created Success [delivery-updates]");

  console.log("Disconnecting Admin..");
  await admin.disconnect();
}

init();