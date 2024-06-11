import { FC } from "react";
import { Outlet } from "react-router-dom";
import { logoYK } from "../../assets/main";
import { useAppSelector } from "../../app/store/hook";
import { selectBalance } from "../../entities/wallet/slices/walletSlice";
import { balance } from "../../assets/slot/info";

interface IMainLayoutProps {}

// eslint-disable-next-line no-empty-pattern
const MainLayout: FC<IMainLayoutProps> = ({ }) => {
  const balanceNum = useAppSelector(selectBalance);
    return (
      <div>
        <div className="w-full bg-[#101a0e] py-3">
          <div className="max-w-[1350px] h-[100px] mx-auto flex justify-between items-center">
            <img src={logoYK} alt="icon" className="w-[90px]" />
            <div className="text-white text-[30px] passion-one-regular flex items-center justify-center ">
              <img src={balance} alt="icon" className="mr-3" width={40} height={40}/>
              <p> {balanceNum}</p>
            </div>
          </div>
        </div>
        <Outlet />
      </div>
    );
};

export default MainLayout;
