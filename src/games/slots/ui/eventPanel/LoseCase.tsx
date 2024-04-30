import { FC, useEffect } from 'react'
import { loseP, win } from '../../../../assets/slot/info';
import { sound } from '@pixi/sound';
import SOUNDS_SLOTS from '../../scene/GameScene/config';

interface LoseCaseProps {
  
}

const LoseCase: FC<LoseCaseProps> = ({ }) => {
     useEffect(() => {
       sound.play(SOUNDS_SLOTS.LOSE);
     }, []);
    
    return (
        <img src={loseP} />
    );
}

export default LoseCase