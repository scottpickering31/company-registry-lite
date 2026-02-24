import Link from "next/link";
import Divider from "@mui/material/Divider";

interface NavigationRoutesProps {
  NavRoute: string;
  NavTitle: string;
  DividerActive: boolean;
}

export default function MuiNavigationRoutes({
  NavRoute,
  NavTitle,
  DividerActive,
}: NavigationRoutesProps) {
  return (
    <>
      <Link href={NavRoute}>
        <h2 className="font-semibold text-xl py-1">{NavTitle}</h2>
        {DividerActive && <Divider className="bg-sky-500 h-1" />}
      </Link>
    </>
  );
}
