"use client";

import AppBar from "@mui/material/AppBar";
import NavigationRoute from "./MuiNavigationRoute";
import { NavObj } from "@/src/constants/NavObj";
import { usePathname } from "next/navigation";
import MuiContainer from "./MuiContainer";

export default function MuiNavigation() {
  const path = usePathname();

  return (
    <AppBar position="static">
      <MuiContainer>
        <div className="flex flex-row justify-between pt-10 py-6 items-center w-full">
          <h1 className="text-3xl font-bold">Company Registry Lite</h1>
          <div className="flex flex-row items-center gap-15">
            {NavObj.map((routes, index) => {
              return (
                <NavigationRoute
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
