import { FC, ReactNode, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../../../app/store/hook";
import { selectSlotCurrentBet, selectSlotLifecycle, selectSlotWinOrLose, SlotLifecycle, SlotWinOrLose } from "../../slices/slotSlice";
import { setBalance } from "../../../../entities/wallet/slices/walletSlice";

interface IBalanceProviderProps {
    children: ReactNode
}

const KOEF_WIN = 3;


const BalanceProvider: FC<IBalanceProviderProps> = ({ children }) => {
    const lifecycle = useAppSelector(selectSlotLifecycle);
    const isPlaying = lifecycle === SlotLifecycle.PLAY;
    const win = useAppSelector(selectSlotWinOrLose);
    const currentBet = useAppSelector(selectSlotCurrentBet);

    const dispatch = useAppDispatch();

    useEffect(() => {
        if (isPlaying) {
            dispatch(setBalance(win === SlotWinOrLose.WIN ? currentBet * KOEF_WIN : -currentBet))
        } 
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [lifecycle])
  return (
      <>
          {children}
      </>
  );
};

export default BalanceProvider;
