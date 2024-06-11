import { FC } from "react";
import { Outlet } from "react-router-dom";

interface IGamesLayoutProps {}

// eslint-disable-next-line no-empty-pattern
const GamesLayout: FC<IGamesLayoutProps> = ({}) => {
  return (
    <div className="w-full h-screen">
      <Outlet />
    </div>
  );
};

export default GamesLayout;
