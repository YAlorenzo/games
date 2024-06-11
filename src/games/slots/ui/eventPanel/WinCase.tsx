import { FC, useEffect } from 'react'
import { win } from '../../../../assets/slot/info';
import { sound } from '@pixi/sound';
import SOUNDS_SLOTS from '../../scene/GameScene/config';

interface WinCaseProps {
  
}

// eslint-disable-next-line no-empty-pattern
const WinCase: FC<WinCaseProps> = ({ }) => {
    useEffect(() => {
        sound.play(SOUNDS_SLOTS.WIN);
    }, [])
    return (
        <img src={win} />
    );
}

export default WinCase