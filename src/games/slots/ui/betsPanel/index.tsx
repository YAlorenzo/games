import { FC } from "react";
import {
  bet100,
  bet200,
  bet400,
  bet50,
  bet800,
} from "../../../../assets/roulette";
import { useAppDispatch, useAppSelector } from "../../../../app/store/hook";
import { selectSlotCurrentBet, setSlotCurrentBet } from "../../slices/slotSlice";

import { sound } from "@pixi/sound";
import { selectBalance } from "../../../../entities/wallet/slices/walletSlice";
import SOUNDS_SLOTS from "../../scene/GameScene/config";
import styles from "./styles.module.css";
import { left_star, right_start } from "../../../../assets/slot/info";

interface ISlotBetsPanelProps {}

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

// eslint-disable-next-line no-empty-pattern
const SlotBetsPanel: FC<ISlotBetsPanelProps> = ({ }) => {
  const currentBet = useAppSelector(selectSlotCurrentBet);
  const balence = useAppSelector(selectBalance);
  const dispatch = useAppDispatch();
  const pickBet = (value: number) => {
    sound.play(SOUNDS_SLOTS.BET);
    if ((value + currentBet) <= balence) {
      dispatch(setSlotCurrentBet(value));
    }
  };
 
  return (
    <div className="flex justify-between items-center">
      <img src={left_star} alt="icon_star" />
      <div className={styles.wrapper}>
        <div className="flex gap-4 justify-center items-center">
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
      <img src={right_start} alt="icon" />
      
    </div>
  );
};

export default SlotBetsPanel;
