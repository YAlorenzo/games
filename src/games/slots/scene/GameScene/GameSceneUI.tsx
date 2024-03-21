import React, { FC, ReactNode } from "react";

interface ISlotGameSceneUIProps {
    children: ReactNode
}

const SlotGameSceneUI: FC<ISlotGameSceneUIProps> = ({children}) => {
    return (
        <div className="relative">
            <div className="absolute left-[5%] top-[5%]">
                Test UI
            </div>
            { children }
      </div>
  )
};

export default SlotGameSceneUI;
