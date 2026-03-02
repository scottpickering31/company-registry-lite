const express = require("express");
const dashboardController = require("../controllers/dashboardController");

const router = express.Router();

router.get("/companies", dashboardController.getCompanyTable);
router.get("/officers", dashboardController.getOfficerTable);
router.post("/companies", dashboardController.createCompany);
router.post("/officers", dashboardController.createOfficer);

module.exports = router;
