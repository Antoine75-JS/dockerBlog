// Setup dotenv
require('dotenv').config();

// Dependencies
const express = require('express');
const mongoose = require('mongoose');

const cors = require('cors');
const routers = require('./routers');
const { MONGO_IP, MONGO_PORT } = require('./config/config');

// Creates express app
const app = express();

// Connect mongo db
const mongoUrl = `mongodb://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@${MONGO_IP}:${MONGO_PORT}/?authSource=admin`

// Tries to connect, waits 3 secs if error then retries
const loopUntilConnected = () => {
  mongoose
    .connect(mongoUrl, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("Connected to mongo database !"))
    .catch((err) => {
      console.log(err);
      setTimeout(loopUntilConnected, 3000);
    });
}

// Start connection loop
loopUntilConnected();

// App init
app.use(express.json());
app.use(cors());

// Initial router
app.use('/api', routers);

// Listens to env PORT or 3404 if not found
app.listen(process.env.PORT || 3000, () => {
  console.log(`Server running on ${process.env.PORT ? process.env.PORT : 3000}`);
});

