import { FC, useEffect } from 'react'
import { loseP } from '../../../../assets/slot/info';
import { sound } from '@pixi/sound';
import SOUNDS_SLOTS from '../../scene/GameScene/config';

interface WinCaseProps {
  
}

const WinCase: FC<WinCaseProps> = ({ }) => {
    useEffect(() => {
        sound.play(SOUNDS_SLOTS.WIN);
    }, [])
    return (
        <img src={loseP} />
    );
}

export default WinCase