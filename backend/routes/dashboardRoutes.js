const express = require("express");
const dashboardController = require("../controllers/dashboardController");

const router = express.Router();

router.get("/companies", dashboardController.getCompanyTable);

module.exports = router;
