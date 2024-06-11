import { FC } from 'react'
import { useAppDispatch, useAppSelector } from '../../../../app/store/hook';
import { selectSlotLifecycle, setSlotRefreshBet } from '../../slices/slotSlice';
import { refreshIcon } from '../../../../assets/main';

interface RefreshBalanceProps {
  
}

// eslint-disable-next-line no-empty-pattern
const RefreshBalance: FC<RefreshBalanceProps> = ({ }) => {
     const dispatch = useAppDispatch();
     const lifecycle = useAppSelector(selectSlotLifecycle);
    
     const refreshBet = (value: boolean) => {
    if (lifecycle !== "play") {
       dispatch(setSlotRefreshBet(value)); 
    }
  };
    return (
         <img
        src={refreshIcon}
        alt="icon"
        width="50px"
        onClick={() => refreshBet(true)}
        className="ml-14 cursor-pointer  hover:scale-[1.05] transition-all"
      /> 
      
  )
   
  };

export default RefreshBalance