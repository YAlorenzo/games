import { FC } from "react";
import { useAppDispatch, useAppSelector } from "../../../../app/store/hook";
import {
  selectCurrentBet,
  selectRouletteBetReady,
  selectRouletteLifecycle,
  setCurrentBet,
  setRouletteBetReady,
  setRouletteRefreshBet,
} from "../../slice/rouletteSlice";
import {
  bet100,
  bet200,
  bet400,
  bet50,
  bet800,
} from "../../../../assets/roulette";
import styles from "./betsPanel.module.css";
import { sound } from "@pixi/sound";
import SOUNDS_ROULETTE from "../../scenes/GameScene/config";
import { selectBalance } from "../../../../entities/wallet/slices/walletSlice";
import { twMerge } from "tailwind-merge";
import { refreshIcon } from "../../../../assets/main";

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

// eslint-disable-next-line no-empty-pattern
const BetsPanel: FC<IBetsPanelProps> = ({}) => {
  const dispatch = useAppDispatch();
  const lifecycle = useAppSelector(selectRouletteLifecycle);
  const betReady = useAppSelector(selectRouletteBetReady);
  const balence = useAppSelector(selectBalance);
  const currentBet = useAppSelector(selectCurrentBet);
  const pickBet = (value: number) => {
    sound.play(SOUNDS_ROULETTE.BET);
    if (value + currentBet <= balence) {
      dispatch(setCurrentBet(value));
      dispatch(setRouletteBetReady(true));
      console.log("баланс: ", balence);
      console.log("ставка: ", value + currentBet);
    }
  };
  const refreshBet = (value: boolean) => {
    if (lifecycle !== "play") {
      dispatch(setRouletteRefreshBet(value));
    }
  };
  return (
    <div className="flex">
      <div
        className={twMerge(
          "rounded-[40px]",
          betReady === false && "outline outline-[6px] outline-yellow-400"
        )}
      >
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

export default BetsPanel;
