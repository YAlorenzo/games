import { FC } from "react";
import { useAppSelector } from "../../../../app/store/hook";
import {
  RouletteLifecycle,
  RouletteWinOrLose,
  selectActiveNumber,
  selectCurrentBet,
  selectRouletteLifecycle,
  selectRouletteWinOrLose,
} from "../../slice/rouletteSlice";
import { selectBalance } from "../../../../entities/wallet/slices/walletSlice";
import ScoreWindow from "../../shared/scoreWindow";
import ResultOfBalance from "./ResultOfBalance";


interface IInfoPanelProps {}

export interface IScoreItem {
  id: "balance" | "winBet" | "currentBet" | "activeNumber";
  title: string;
  icon: string;
}

const ITEMS: IScoreItem[] = [
  {
    id: "balance",
    title: "Balance",
    icon: "",
  },
  {
    id: "winBet",
    title: "Win Bet",
    icon: "",
  },
  {
    id: "currentBet",
    title: "Bet",
    icon: "",
  },
  {
    id: "activeNumber",
    title: "Bet number",
    icon: "",
  },
];

// eslint-disable-next-line no-empty-pattern
const InfoPanel: FC<IInfoPanelProps> = ({ }) => {
  const balance = useAppSelector(selectBalance);
  const activeNumber = useAppSelector(selectActiveNumber);
  const currentBet = useAppSelector(selectCurrentBet);
  const winOrLose = useAppSelector(selectRouletteWinOrLose);
  const lifecycle = useAppSelector(selectRouletteLifecycle);
  const winBet = currentBet * 36;

  return (
    <div className="flex justify-between px-10">
      {ITEMS.map((item) => (
        <div key={item.id}>
          <div className="text-[25px] flex justify-between relative">
            {item.title}

            {item.id === "balance" &&
              lifecycle === RouletteLifecycle.INFO &&
              winOrLose === RouletteWinOrLose.LOSE && (
                <ResultOfBalance
                  win={false}
                  currentBet={currentBet}
                  winBet={winBet}
                />
              )}
            {item.id === "balance" &&
              lifecycle === RouletteLifecycle.INFO &&
              winOrLose === RouletteWinOrLose.WIN && (
                <ResultOfBalance
                  win={true}
                  currentBet={currentBet}
                  winBet={winBet}
                />
              )}
          </div>
          <div>
            {item.id === "balance" && (
              <div>
                <ScoreWindow icon="balance">{balance}</ScoreWindow>
              </div>
            )}
            {item.id === "winBet" && (
              <ScoreWindow icon="winBet">
                <div className="pr-1">
                  {winBet !== 0 ? "+" + winBet : winBet}
                </div>
              </ScoreWindow>
            )}
            {item.id === "currentBet" && (
              <ScoreWindow icon="currentBet">{currentBet}</ScoreWindow>
            )}
            {item.id === "activeNumber" && (
              <ScoreWindow icon="activeNumber">
                <div className="pr-6">{activeNumber}</div>
              </ScoreWindow>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default InfoPanel;
