const { Kafka } = require("kafkajs");
//Localhost connection
exports.kafka = new Kafka({
  clientId: "kafka-food-delivery",
  brokers: ["127.0.0.1:9092"],
});