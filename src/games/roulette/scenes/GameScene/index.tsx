import React, { FC, useEffect } from "react";
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

interface IRouletteGameSceneProps {}

const [width, height] = [1150, 500];

const RouletteGameScene: FC<IRouletteGameSceneProps> = ({}) => {
  // импорт звуков
  sound.add(SOUNDS_ROULETTE.BG, soundBg);
  sound.add(SOUNDS_ROULETTE.BET, soundBet);
  sound.add(SOUNDS_ROULETTE.NUMBER, soundNumber);
  sound.add(SOUNDS_ROULETTE.SPIN, soundRouletteSpin);

  useEffect(() => {
    (async () => {
      await PIXI.Assets.load(SOUNDS_ROULETTE.BG);
      sound.volume(SOUNDS_ROULETTE.BG, 0.2);
      sound.play(SOUNDS_ROULETTE.BG);
    })();
  }, []);

  return (
    <div className="flex flex-col items-center">
      <div>Title Games</div>
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
    </div>
  );
};
export default RouletteGameScene;
