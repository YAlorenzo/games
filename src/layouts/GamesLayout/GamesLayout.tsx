import React, { FC } from "react";
import { Outlet } from "react-router-dom";

interface IGamesLayoutProps {}

const GamesLayout: FC<IGamesLayoutProps> = ({}) => {
  return (
    <div className="w-full h-screen">
      {/* <div>Heard Games</div> */}
      <Outlet />
    </div>
  );
};

export default GamesLayout;
