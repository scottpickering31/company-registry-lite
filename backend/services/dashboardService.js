const pool = require("../db");

const companyColumns = [
  { key: "name", header: "Company Name", type: "bold" },
  { key: "companyNumber", header: "Company Number", type: "text" },
  { key: "status", header: "Status", type: "status" },
  { key: "actions", header: "Actions", type: "actions" },
];

const normalizeStatus = (status) => {
  if (!status) return null;
  const normalized = String(status).trim().toLowerCase();
  if (normalized === "active") return "Active";
  if (normalized === "dormant") return "Dormant";
  return null;
};

const normalizeSort = (sortBy) => {
  if (!sortBy) return null;
  const normalized = String(sortBy).trim().toLowerCase();
  if (normalized === "name") return "name";
  if (normalized === "date created") return "dateCreated";
  if (normalized === "created_at") return "dateCreated";
  return null;
};

const getCompanyTable = async ({ status, q, sortBy, page, pageSize }) => {
  const safePageSize =
    Number.isFinite(Number(pageSize)) && Number(pageSize) > 0
      ? Number(pageSize)
      : 10;
  const safePage =
    Number.isFinite(Number(page)) && Number(page) > 0 ? Number(page) : 1;
  const offset = (safePage - 1) * safePageSize;

  const whereClauses = [];
  const values = [];

  const normalizedStatus = normalizeStatus(status);
  if (normalizedStatus) {
    values.push(normalizedStatus);
    whereClauses.push(`LOWER(status::text) = LOWER($${values.length})`);
  }

  if (q) {
    const needle = String(q).trim().toLowerCase();
    if (needle) {
      values.push(`%${needle}%`);
      whereClauses.push(
        `(LOWER(name) LIKE $${values.length} OR LOWER(company_number::text) LIKE $${values.length})`,
      );
    }
  }

  const whereSql =
    whereClauses.length > 0 ? `WHERE ${whereClauses.join(" AND ")}` : "";

  const normalizedSort = normalizeSort(sortBy);
  let orderBy = "name ASC";
  if (normalizedSort === "name") {
    orderBy = "name ASC";
  } else if (normalizedSort === "dateCreated") {
    orderBy = "created_at DESC";
  }

  const countResult = await pool.query(
    `SELECT COUNT(*)::int AS total FROM companies ${whereSql}`,
    values,
  );

  const dataValues = [...values, safePageSize, offset];
  const rowsResult = await pool.query(
    `
      SELECT
        id,
        name,
        status,
        company_number AS "companyNumber"
      FROM companies
      ${whereSql}
      ORDER BY ${orderBy}
      LIMIT $${dataValues.length - 1}
      OFFSET $${dataValues.length}
    `,
    dataValues,
  );

  return {
    columns: companyColumns,
    page: safePage,
    pageSize: safePageSize,
    total: countResult.rows[0]?.total ?? 0,
    rows: rowsResult.rows.map((row) => ({
      ...row,
      status: normalizeStatus(row.status) ?? row.status,
    })),
  };
};

module.exports = {
  getCompanyTable,
};
