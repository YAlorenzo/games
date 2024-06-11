import { FC } from "react";
import { Outlet } from "react-router-dom";

interface IAuthLayoutProps {}

// eslint-disable-next-line no-empty-pattern
const AuthLayout: FC<IAuthLayoutProps> = ({}) => {
  return (
    <div>
      <div>Heard Auth</div>
      <Outlet />
    </div>
  );
};

export default AuthLayout;
