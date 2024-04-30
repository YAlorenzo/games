import { FC, useEffect } from "react";
import SlotGameSceneUI from "./GameSceneUI";
import { Stage } from "../../../../app/config/contextBridge";
import RowsPX from "../../pixi/rows/RowsPX";
import SlotLifecycleProvider from "./SlotLifecycleProvider";
import BalanceProvider from "./BalanceProvider";
import styles from "./gameScene.module.css";
import { twMerge } from "tailwind-merge";
import BodyPX from "../../pixi/body/BodyPX";
import { sound } from "@pixi/sound";
import SOUNDS_SLOTS from "./config";
import { soundBet, soundLose, soundSpin, soundWin } from "../../../../assets/sounds/slots";


interface ISlotGameSceneProps {}

const [width, height] = [1150, 550];

const SlotGameScene: FC<ISlotGameSceneProps> = ({ }) => {
  // импорт звуков
  sound.add(SOUNDS_SLOTS.SPIN, soundSpin);
  sound.add(SOUNDS_SLOTS.BET, soundBet);
  sound.add(SOUNDS_SLOTS.WIN, soundWin);
  sound.add(SOUNDS_SLOTS.LOSE, soundLose);

  
  return (
    <div
      style={{
        width,
        height,
      }}
      className={twMerge(
        "flex justify-center items-center top-[10%]",
        styles.table
      )}
    >
      <SlotLifecycleProvider>
        <BalanceProvider>
          <SlotGameSceneUI>
            <Stage
              width={width}
              height={height}
              options={{
                background: "rgba(46, 29, 51, 0.96)",
              }}
            >
              <BodyPX />
              <RowsPX />
            </Stage>
          </SlotGameSceneUI>
        </BalanceProvider>
      </SlotLifecycleProvider>
    </div>
  );
};

export default SlotGameScene;
