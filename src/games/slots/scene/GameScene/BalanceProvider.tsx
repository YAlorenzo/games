import React, { FC, ReactNode, useEffect } from "react";
import { Outlet } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../../../app/store/hook";
import { selectSlotCurrentBet, selectSlotLifecycle, selectSlotWinOrLose, SlotLifecycle, SlotWinOrLose } from "../../slices/slotSlice";
import { setBalance } from "../../../../entities/wallet/slices/walletSlice";

interface IBalanceProviderProps {
    children: ReactNode
}

const KOEF_WIN = 10;


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
    }, [lifecycle])
  return (
      <>
          {children}
      </>
  );
};

export default BalanceProvider;
