const express = require("express");
const cors = require("cors");

const app = express();
const phoneRouter = require("./routes/phone.routes");

app.use(cors());
app.use(express.json());

app.use("/api/phone/", phoneRouter);

module.exports = { app };