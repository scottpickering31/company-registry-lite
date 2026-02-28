const dashboardService = require("../services/dashboardService");

const getCompanyTable = async (req, res) => {
  const { status, q, sortBy, page, pageSize } = req.query;
  try {
    const payload = await dashboardService.getCompanyTable({
      status,
      q,
      sortBy,
      page,
      pageSize,
    });
    res.json(payload);
  } catch (error) {
    console.error("Failed to fetch companies from database", error);
    res.status(500).json({ message: "Failed to load companies" });
  }
};

module.exports = {
  getCompanyTable,
};
