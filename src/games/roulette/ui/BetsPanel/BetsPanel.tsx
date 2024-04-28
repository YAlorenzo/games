import React, { FC } from "react";
import { useAppDispatch, useAppSelector } from "../../../../app/store/hook";
import {  selectCurrentBet, selectRouletteBetReady, setCurrentBet, setRouletteBetReady } from "../../slice/rouletteSlice";
import {
  bet100,
  bet200,
  bet400,
  bet50,
  bet800,
} from "../../../../assets/roulette";
import styles from './betsPanel.module.css';
import { sound } from "@pixi/sound";
import SOUNDS_ROULETTE from "../../scenes/GameScene/config";
import { selectBalance } from "../../../../entities/wallet/slices/walletSlice";
import { twMerge } from "tailwind-merge";

interface IBetsPanelProps {}

const BETS = [
  {
    value: 50,
    image: bet50,
  },
  {
    value: 100,
    image: bet100,
  },
  {
    value: 200,
    image: bet200,
  },
  {
    value: 400,
    image: bet400,
  },
  {
    value: 800,
    image: bet800,
  },
];

const BetsPanel: FC<IBetsPanelProps> = ({ }) => {
  const dispatch = useAppDispatch();
  const currentBet = useAppSelector(selectCurrentBet);
  const balance = useAppSelector(selectBalance);
  const betReady = useAppSelector(selectRouletteBetReady);
  const pickBet = (value: number) => {
    if ((value + currentBet) <= balance) {
      sound.play(SOUNDS_ROULETTE.BET);
      dispatch(setCurrentBet(value));
      dispatch(setRouletteBetReady(true));
    }
    else {
      sound.play(SOUNDS_ROULETTE.NUMBER);
    }
  };
  return (
    <div className={twMerge("rounded-[40px]", betReady === false && "outline outline-[6px] outline-yellow-400")}>
      <div className={styles.wrapper}>
        <div className="flex gap-5 items-center">
          {BETS.map(({ value, image }) => (
            <div
              onClick={() => pickBet(value)}
              onContextMenu={(e) => {
                e.preventDefault();
                pickBet(-value);
              }}
              key={value}
              className="cursor-pointer hover:scale-[1.05] transition-all"
            >
              <img src={image} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BetsPanel;
