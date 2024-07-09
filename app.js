const express = require("express");
const cors = require("cors");

const app = express();
const phoneRouter = require("./routes/phone.routes");

app.use(cors());
app.use(express.json());

app.use("/api/phones/", phoneRouter);
app.get("/", async (req, res) => {
  res.send("https://phones-frontend.onrender.com/");
});

module.exports = { app };
