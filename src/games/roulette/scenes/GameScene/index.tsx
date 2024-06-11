import { FC, useEffect } from "react";
import RouletteSpinPX from "../../pixi/rouletteSpin/RouletteSpinPX";
import GameSceneUI from "./GameSceneUI";
import { Stage } from "../../../../app/config/contextBridge";
import GameSceneActionsProvider from "./GameSceneActionsProvider";
import BgPX from "../../pixi/bg/bgPx";
import { sound } from "@pixi/sound";
import {
  soundBet,
  soundBg,
  soundNumber,
  soundRouletteSpin,
} from "../../../../assets/sounds/roulette";
import SOUNDS_ROULETTE from "./config";
import * as PIXI from "pixi.js";
import Modal from "../../ui/Modal/Modal";

interface IRouletteGameSceneProps {}

const [width, height] = [1300, 550];

// eslint-disable-next-line no-empty-pattern
const RouletteGameScene: FC<IRouletteGameSceneProps> = ({ }) => {

  // импорт звуков
  sound.add(SOUNDS_ROULETTE.BG, soundBg);
  sound.add(SOUNDS_ROULETTE.BET, soundBet);
  sound.add(SOUNDS_ROULETTE.NUMBER, soundNumber);
  sound.add(SOUNDS_ROULETTE.SPIN, soundRouletteSpin);

  useEffect(() => {
    (async () => {
      await PIXI.Assets.load(SOUNDS_ROULETTE.BG);
      const soundBg = sound.find(SOUNDS_ROULETTE.BG);
      sound.volume(SOUNDS_ROULETTE.BG, 0.08);
      soundBg.loop = true;
      soundBg.play();
    })();
  }, []);

  return (
    <>
      <div className="flex flex-col items-center">
        <div className="rounded-3xl shadow-2xl shadow-black overflow-hidden">
          <GameSceneActionsProvider>
            <GameSceneUI>
              <Stage
                width={width}
                height={height}
                options={{
                  background: "green",
                }}
              >
                <BgPX />
                <RouletteSpinPX />
              </Stage>
            </GameSceneUI>
          </GameSceneActionsProvider>
        </div>
        <Modal />
      </div>
    </>
  );
};
export default RouletteGameScene;
