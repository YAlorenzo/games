import React, { FC } from "react";
import { Outlet } from "react-router-dom";
import { logoYK } from "../../assets/main";

interface IMainLayoutProps {}

const MainLayout: FC<IMainLayoutProps> = ({}) => {
    return (
      <div>
        <div className="w-full bg-[#101a0e] py-3">
            <div className="max-w-[1350px] h-[100px] mx-auto flex justify-between items-center">
                <img src={logoYK} alt="icon" className="w-[90px]" />
                <p className="text-white text-[20px]">v.0.0.3</p>
          </div>
        </div>
        <Outlet />
      </div>
    );
};

export default MainLayout;
