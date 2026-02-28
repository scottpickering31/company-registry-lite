import type { CompanyTablePayload } from "@/src/types/dashboard.types";

const API_BASE = process.env.NEXT_PUBLIC_API_URL as string;

export type FetchCompanyTableParams = {
  status?: "Active" | "Dormant" | "All";
  q?: string;
  sortBy?: "Name" | "Date Created";
  page?: number;
  pageSize?: number;
};

const buildQueryString = (params: FetchCompanyTableParams = {}) => {
  const searchParams = new URLSearchParams();

  if (params.status && params.status !== "All") {
    searchParams.set("status", params.status);
  }

  if (params.q) {
    searchParams.set("q", params.q);
  }

  if (params.sortBy) {
    searchParams.set("sortBy", params.sortBy);
  }

  if (typeof params.page === "number") {
    searchParams.set("page", String(params.page));
  }

  if (typeof params.pageSize === "number") {
    searchParams.set("pageSize", String(params.pageSize));
  }

  const queryString = searchParams.toString();
  return queryString ? `?${queryString}` : "";
};

export const fetchCompanyTable = async (
  params?: FetchCompanyTableParams,
): Promise<CompanyTablePayload> => {
  const response = await fetch(
    `${API_BASE}/api/dashboard/companies${buildQueryString(params)}`,
    {
      cache: "no-store",
    },
  );

  if (!response.ok) {
    return { columns: [], rows: [] };
  }

  return response.json();
};
