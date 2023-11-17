# kafka_food_delivery
Sample Kafka food deliver app

This code to go with the article at [vignesh.page](https://vignesh.page/posts/kakfa)


To run Kafka and Zookeeper locally, we presume docker and docker compose is intalled.

```bash
docker-compose -f docker-compose.yaml up
```

Please refer this [Github](https://github.com/conduktor/kafka-stack-docker-compose) project for more alternative setups available.

The sample project has 3 files

- admin.js is used to create the topics. We can create as many as required.

```bash
node admin.js
```

- producer.js opens up a cli interface where we can give the order id, status and the location.

```bash
node producer.js
```

- consumer.js opens up a consumer and displays the message as and when received. We can mention the group which it should be part of. Since we have 2 partitions, it would be ideal if we create 2 consumers with the same consumer group. This will allow us to see all messages sent with location as Bangalore go to one partition and rest all to another partition.

```bash
node consumer.js group1
```
