import React, { FC } from "react";
import SlotGameSceneUI from "./GameSceneUI";
import { Stage } from "../../../../app/config/contextBridge";

interface ISlotGameSceneProps { }

const [width, height] = [1100, 600];

const SlotGameScene: FC<ISlotGameSceneProps> = ({}) => {
  return (
      <div>
          <SlotGameSceneUI>
              <Stage width={width} height={height} 
              >
                  
              </Stage>
          </SlotGameSceneUI>
     </div>
  );
};

export default SlotGameScene;
