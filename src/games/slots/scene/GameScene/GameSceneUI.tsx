import React, { FC, ReactNode } from "react";
import SlotBetsPanel from "../../ui/betsPanel";
import SlotInfoPanel from "../../ui/infoPanel";
import SlotEventPanel from "../../ui/eventPanel";
import RefreshBalance from "../../ui/refreshBalance/RefreshBalance";

interface ISlotGameSceneUIProps {
  children: ReactNode;
}

const SlotGameSceneUI: FC<ISlotGameSceneUIProps> = ({ children }) => {
  return (
    <div className="relative passion-one-regular">
      <div className="absolute left-[50%] bottom-[3%] translate-x-[-50%]">
        <SlotBetsPanel />
      </div>
      <div className="absolute left-[3%] top-[30%]">
        <SlotInfoPanel />
      </div>
      <div className="absolute right-[9%] top-[15%]">
        <SlotEventPanel />
      </div>
      <div className="absolute bottom-[7%] right-[14%]">
        <RefreshBalance />
      </div>
      {children}
    </div>
  );
};

export default SlotGameSceneUI;
