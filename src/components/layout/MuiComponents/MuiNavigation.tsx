"use client";

import AppBar from "@mui/material/AppBar";
import MuiNavigationRoute from "@/src/components/layout/MuiComponents/MuiNavigationRoute";
import { NavObj } from "@/src/constants/NavObj";
import { usePathname } from "next/navigation";
import MuiContainer from "@/src/components/layout/MuiComponents/MuiContainer";

export default function MuiNavigation() {
  const path = usePathname();

  return (
    <AppBar position="static">
      <MuiContainer>
        <div className="flex flex-row justify-between pt-7 py-5 items-center w-full">
          <h1 className="text-2xl font-bold">Company Registry Lite</h1>
          <div className="flex flex-row items-center gap-15">
            {NavObj.map((routes, index) => {
              return (
                <MuiNavigationRoute
                  key={index}
                  NavRoute={routes.route}
                  NavTitle={routes.title}
                  DividerActive={path === routes.route}
                />
              );
            })}
            <h1 className="text-md font-semibold">Welcome, Admin</h1>
            <button className="border-1 border px-3 py-1 rounded-md text-lg font-bold bg-[#435ca1] cursor-pointer">
              Log Out
            </button>
          </div>
        </div>
      </MuiContainer>
    </AppBar>
  );
}
