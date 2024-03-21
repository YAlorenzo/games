import React, { FC } from "react";
import { useAppDispatch, useAppSelector } from "../../../../app/store/hook";
import { selectRouletteSpinCurrentNumber, setRouletteSpinStartSpeed } from "../../slice/rouletteSpinSlice";
import { RouletteLifecycle, RouletteWinOrLose,  selectRouletteLifecycle, selectRouletteWinOrLose, setRouletteLifecycle } from "../../slice/rouletteSlice";
import RouletteStartButton from "../../shared/button/RouletteStartButton";
import { sound } from "@pixi/sound";
import SOUNDS_ROULETTE from "../../scenes/GameScene/config";

interface IEventPanelProps {}

const EventPanel: FC<IEventPanelProps> = ({ }) => {
  const lifecycle = useAppSelector(selectRouletteLifecycle);
  const winOrLose = useAppSelector(selectRouletteWinOrLose);
  const currentNumber = useAppSelector(selectRouletteSpinCurrentNumber);
  const dispatch = useAppDispatch();

  const onStart = () => {
    sound.play(SOUNDS_ROULETTE.SPIN);
    dispatch(setRouletteSpinStartSpeed());
    dispatch(setRouletteLifecycle(RouletteLifecycle.PLAY));
    }
  return (
    <div>
      {lifecycle === RouletteLifecycle.READT_TO_START && (
        <RouletteStartButton onClick={onStart} />
      )}
      {lifecycle === RouletteLifecycle.PLAY && <div>Play...</div>}
      {lifecycle === RouletteLifecycle.FINISHED && <div>Call</div>}
      {lifecycle === RouletteLifecycle.INFO && (
        <div className="flex gap-4">
          <div>
            {winOrLose === RouletteWinOrLose.WIN && "Win"}
            {winOrLose === RouletteWinOrLose.LOSE && "Lose"}
          </div>
          <div>{ currentNumber }</div>
        </div>
      )}
    </div>
  );
};

export default EventPanel;
