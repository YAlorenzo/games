import { FC } from "react";
import { useAppDispatch, useAppSelector } from "../../../../app/store/hook";
import {
  selectRouletteSpinCurrentNumber,
  setRouletteSpinStartSpeed,
} from "../../slice/rouletteSpinSlice";
import {
  RouletteLifecycle,
  selectActiveNumber,
  selectCurrentBet,
  selectRouletteLifecycle,
  setRouletteBetReady,
  setRouletteLifecycle,
  setRouletteNumberReady,
} from "../../slice/rouletteSlice";
import RouletteStartButton from "../../shared/button/RouletteStartButton";
import { sound } from "@pixi/sound";
import SOUNDS_ROULETTE from "../../scenes/GameScene/config";
import { selectBalance } from "../../../../entities/wallet/slices/walletSlice";
import Notiflix from "notiflix";

interface IEventPanelProps {}

// eslint-disable-next-line no-empty-pattern
const EventPanel: FC<IEventPanelProps> = ({}) => {
  const lifecycle = useAppSelector(selectRouletteLifecycle);
  const currentNumber = useAppSelector(selectRouletteSpinCurrentNumber);
  const currentBet = useAppSelector(selectCurrentBet);
  const balence = useAppSelector(selectBalance);
  const activeNumber = useAppSelector(selectActiveNumber);
  const dispatch = useAppDispatch();

  const onStart = () => {
    if (currentBet > balence) {
       Notiflix.Notify.failure("Bet is more than balance!");
    }
    else if (activeNumber === null) {
      dispatch(setRouletteNumberReady(false));
    } else if (currentBet === 0) {
       dispatch(setRouletteBetReady(false));
    } else {
      sound.play(SOUNDS_ROULETTE.SPIN);
      dispatch(setRouletteSpinStartSpeed());
      dispatch(setRouletteLifecycle(RouletteLifecycle.PLAY));
    }
  };
  return (
    <div className="mt-5 flex justify-center items-center w-[250px] mx-auto text-[25px]">
      {lifecycle === RouletteLifecycle.READT_TO_START && (
        <RouletteStartButton onClick={onStart} />
      )}
      {lifecycle === RouletteLifecycle.PLAY && (
        <div className="text-[35px]">Play...</div>
      )}
      {lifecycle === RouletteLifecycle.FINISHED && <div>Call</div>}
      {lifecycle === RouletteLifecycle.INFO && (
        <div className="flex gap-4">
          <div className="text-[25px]">The number came up: {currentNumber}</div>
          {/* <div>
            {winOrLose === RouletteWinOrLose.WIN && "You Win"}
            {winOrLose === RouletteWinOrLose.LOSE && "You Lose"}
          </div> */}
        </div>
      )}
    </div>
  );
};

export default EventPanel;
