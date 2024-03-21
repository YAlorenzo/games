import React, { FC, ReactNode } from "react";
import RouletteTable from "../../ui/RouletteTable/RouletteTable";
import BetPanel from "../../ui/BetsPanel/BetsPanel";
import InfoPanel from "../../ui/InfoPanel/InfoPanel";
import EventPanel from "../../ui/EventPanel/EventPanel";

interface IGameSceneUIProps {
  children: ReactNode;
}

const GameSceneUI: FC<IGameSceneUIProps> = ({ children }) => {
  return (
    <div className="relative text-white">
      <div className="absolute left-0 right-0 top-[5%] ">
        <InfoPanel />
      </div>
      <div className="absolute left-[62%] top-[25%] ">
        <EventPanel />
      </div>
      <div className="absolute left-[45%] bottom-[29%] ">
        <RouletteTable />
      </div>
      <div className="absolute left-[45%] bottom-[10%]  z-10">
        <BetPanel />
      </div>
      {children}
    </div>
  );
};

export default GameSceneUI;
