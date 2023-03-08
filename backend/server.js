const express = require("express");
const connectDB = require("./config/db");

const dotenv = require("dotenv").config();

const app = express();

const connectBackend = async () => {
  try {
    connectDB(process.env.MONGO_URL);

    app.listen(process.env.PORT, () =>
      console.log(`Sever connected on ${process.env.PORT}`)
    );
  } catch (error) {
    console.log(error);
  }
};
connectBackend();
