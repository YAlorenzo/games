import { FC } from "react";
import { useAppDispatch, useAppSelector } from "../../../../app/store/hook";
import {
  SlotLifecycle,
  selectSlotCurrentBet,
  selectSlotLifecycle,
  selectSlotWinOrLose,
  startSlot,
} from "../../slices/slotSlice";
import { twMerge } from "tailwind-merge";
import { button, handle, spin, } from "../../../../assets/slot/info";
import { selectBalance } from "../../../../entities/wallet/slices/walletSlice";
import Notiflix from "notiflix";
import { sound } from "@pixi/sound";
import SOUNDS_SLOTS from "../../scene/GameScene/config";
import WinCase from "./WinCase";
import LoseCase from "./LoseCase";


interface ISlotEventPanelProps {}

// eslint-disable-next-line no-empty-pattern
const SlotEventPanel: FC<ISlotEventPanelProps> = ({ }) => {
  const lifecycle = useAppSelector(selectSlotLifecycle);
  const winOrLose = useAppSelector(selectSlotWinOrLose);
  const currentBet = useAppSelector(selectSlotCurrentBet);
  const balance = useAppSelector(selectBalance);
 

  const isReadyToStart = lifecycle === SlotLifecycle.READY_TO_START;
  const dispatch = useAppDispatch();
  // if (winOrLose !== "win") {
  //   sound.play(SOUNDS_SLOTS.WIN);
  // }
  const onStart = () => {
    if (currentBet > balance) {
      Notiflix.Notify.failure("Bet is more than balance!");
    }
    else if (currentBet === 0) {
      Notiflix.Notify.failure("You didn't place a bet!");
    }
    else if (isReadyToStart) {
      sound.play(SOUNDS_SLOTS.SPIN);
      dispatch(startSlot());
    }
  };
  return (
    <div className="flex flex-col justify-between  h-[300px] w-[150px]">
      <div>
        {lifecycle === SlotLifecycle.INFO && (
          <div>
            {winOrLose === "win" && <WinCase />}
            {winOrLose !== "win" && <LoseCase />}
          </div>
        )}
      </div>
      <div
        onClick={onStart}
        className={twMerge("relative", isReadyToStart && "cursor-pointer")}
      >
        {isReadyToStart && (
          <div className="absolute left-[45%] top-[50%] translate-x-[-50%] translate-y-[-50%] z-20">
            <img src={spin} />
          </div>
        )}
        <img src={button} className="z-10 relative" />
        <img className="absolute right-[85%] bottom-0" src={handle} />
      </div>
    </div>
  );
};

export default SlotEventPanel;
