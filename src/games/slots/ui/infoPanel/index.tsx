import { FC, useEffect, useState } from "react";
import { useAppSelector } from "../../../../app/store/hook";
import { selectSlotCurrentBet, selectSlotLifecycle, SlotLifecycle } from "../../slices/slotSlice";
import { selectBalance } from "../../../../entities/wallet/slices/walletSlice";
import SlotScoreWindow from "../../shared/ScoreWindow";

interface ISlotInfoPanelProps {}

// eslint-disable-next-line no-empty-pattern
const SlotInfoPanel: FC<ISlotInfoPanelProps> = ({ }) => {
  const currentBet = useAppSelector(selectSlotCurrentBet);
  const balance = useAppSelector(selectBalance);
  const [displayBalance, setDisplayBalance] = useState(balance);
  const lifecycle = useAppSelector(selectSlotLifecycle);
  const isInfo = lifecycle === SlotLifecycle.INFO

  useEffect(() => {
    if (isInfo) {
      setDisplayBalance(balance);
    }
    
  }, [isInfo, balance])
    return (
      <div className="flex flex-col gap-8 ">
        <SlotScoreWindow icon="balance">{displayBalance ?? 0}</SlotScoreWindow>
        <SlotScoreWindow icon="bets">{currentBet ?? 0}</SlotScoreWindow>
      </div>
    );
};

export default SlotInfoPanel;
