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
import { soundBet, soundLose, soundSlotBg, soundSpin, soundWin } from "../../../../assets/sounds/slots";
import * as PIXI from "pixi.js";
import Modal from "../../ui/Modal/Modal";
import { Container, Sprite } from "@pixi/react";
import bodyImage from "../../../../assets/slot/body.svg";
import centralLine from "../../../../assets/slot/centralLine.svg";

interface ISlotGameSceneProps {}

const [width, height] = [1150, 550];

const SlotGameScene: FC<ISlotGameSceneProps> = ({ }) => {
  // импорт звуков
  sound.add(SOUNDS_SLOTS.SPIN, soundSpin);
  sound.add(SOUNDS_SLOTS.BET, soundBet);
  sound.add(SOUNDS_SLOTS.WIN, soundWin);
  sound.add(SOUNDS_SLOTS.LOSE, soundLose);
  sound.add(SOUNDS_SLOTS.BG, soundSlotBg);

  useEffect(() => {
    (async () => {
      await PIXI.Assets.load(SOUNDS_SLOTS.BG);
      sound.volume(SOUNDS_SLOTS.BG, 0.03);
      const soundBg = sound.find(SOUNDS_SLOTS.BG);
      soundBg.loop = true;
      soundBg.play();
    })();
  }, []);

  
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
              <Container>
                <Sprite x={575} y={250} image={bodyImage} anchor={0.5} />
                <RowsPX />
                <BodyPX />
                <Sprite image={centralLine} x={380} y={250} />
              </Container>
            </Stage>
          </SlotGameSceneUI>
        </BalanceProvider>
      </SlotLifecycleProvider>
      <Modal />
    </div>
  );
};

export default SlotGameScene;
