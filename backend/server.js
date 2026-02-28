require("dotenv").config();

const express = require("express");
const cors = require("cors");
const pool = require("./db");
const dashboardRoutes = require("./routes/dashboardRoutes");

const app = express();
app.use(cors());
app.use(express.json());

const port = process.env.PORT || 3001;

app.use("/api/dashboard", dashboardRoutes);

app.listen(port, () => console.log("Listening on port " + port));
