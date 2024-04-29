import React, { FC } from "react";
import {
  bet100,
  bet200,
  bet400,
  bet50,
  bet800,
} from "../../../../assets/roulette";
import { useAppDispatch, useAppSelector } from "../../../../app/store/hook";
import { selectSlotCurrentBet, selectSlotReadyToStart, setSlotCurrentBet, setSlotReadyToStart, setSlotRefreshBet } from "../../slices/slotSlice";
import SOUNDS_ROULETTE from "../../../roulette/scenes/GameScene/config";
import { sound } from "@pixi/sound";
import { selectBalance } from "../../../../entities/wallet/slices/walletSlice";
import { refreshIcon } from "../../../../assets/main";

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

const SlotBetsPanel: FC<ISlotBetsPanelProps> = ({}) => {
  const dispatch = useAppDispatch();
  const pickBet = (value: number) => {
    // sound.play(SOUNDS_ROULETTE.BET);
      dispatch(setSlotCurrentBet(value)); 
  };
  const refreshBet = (value: boolean) => {

    dispatch(setSlotRefreshBet(value));
  };
  return (
    <div className="flex mx-auto">
      <div className="flex  gap-3 justify-center items-center">
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
      <img
        src={refreshIcon}
        alt="icon"
        width="50px"
        onClick={() => refreshBet(true)}
        className="ml-14 cursor-pointer hover:scale-[1.05] transition-all"
      />
    </div>
  );
};

export default SlotBetsPanel;
