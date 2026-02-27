import { mockCompanies } from "@/src/mocks/dashboard";
import { notFound } from "next/navigation";

type Props = {
  params: Promise<{ id: string }>;
};

export default async function CompanyPage({ params }: Props) {
  const { id } = await params;

  const companyId = Number(id);
  if (Number.isNaN(companyId)) notFound();

  const company = mockCompanies.find((c) => c.id === companyId);
  if (!company) notFound();

  return (
    <div>
      <h1>{company.name}</h1>
      <p>
        <strong>Status:</strong> {company.status}
      </p>
      <p>
        <strong>Company Number:</strong> {company.companyNumber}
      </p>
    </div>
  );
}
