const express = require("express");
const connectDB = require("./config/db");
const userRoutes = require("./routes/userRoutes");
const postsRoutes = require("./routes/postRoutes");
const catRoutes = require("./routes/catRoute");
const cors = require("cors");
const { notFound, errorResponseHandler } = require("./middleware/errorHandler");
const feedbackRoute = require("./routes/feedbackRoute");

const dotenv = require("dotenv").config();

const app = express();
app.use(express.json());
app.use(cors());
app.get("/messages", (req, res) => {
  res.send("Hello");
});
app.get("/", (req, res) => {
  res.send("Hello");
});

app.use("/api/v1/", userRoutes);
app.use("/api/v1/", postsRoutes);
app.use("/api/v1/", catRoutes);
app.use("/api/v1", feedbackRoute);
// app.post("/feedbacks", async (req, res) => {
//   const { name, email, reason, msg } = req.body;

//   const data = {
//     name: name,
//     email: email,
//     reason: reason,
//     msg: msg,
//   };
//   await Feedback.insertMany([data]);
// });
app.use(notFound);
app.use(errorResponseHandler);

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
