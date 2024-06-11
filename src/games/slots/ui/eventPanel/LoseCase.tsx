import { FC, useEffect } from 'react'
import { loseP} from '../../../../assets/slot/info';
import { sound } from '@pixi/sound';
import SOUNDS_SLOTS from '../../scene/GameScene/config';

interface LoseCaseProps {
  
}

// eslint-disable-next-line no-empty-pattern
const LoseCase: FC<LoseCaseProps> = ({ }) => {
     useEffect(() => {
       sound.play(SOUNDS_SLOTS.LOSE);
     }, []);
    
    return (
        <img src={loseP} />
    );
}

export default LoseCase