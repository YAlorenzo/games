import { FC } from 'react'
import { infoButtonIcon, infoTable } from '../../../../assets/roulette';
import css from "./style.module.css";

interface ButtonInfoProps {
  
}

const ButtonInfo: FC<ButtonInfoProps> = ({}) => {
    return (
        <div className={css.buttonInfoBlock}>
          <img src={infoTable} className={css.infoTable} />
          <img src={infoButtonIcon} alt="icon" className={css.button} />
        </div>
    );
}

export default ButtonInfo