import React, { FC } from "react";
import { Outlet } from "react-router-dom";

interface IAuthLayoutProps {}

const AuthLayout: FC<IAuthLayoutProps> = ({}) => {
  return (
    <div>
      <div>Heard Auth</div>
      <Outlet />
    </div>
  );
};

export default AuthLayout;
