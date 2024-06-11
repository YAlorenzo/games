import { FC } from "react";
import RouletteGameScene from "./scenes/GameScene";

interface ICoreGameRouletteProps {}

// eslint-disable-next-line no-empty-pattern
const CoreGameRoulette: FC<ICoreGameRouletteProps> = ({ }) => {
    return (
      <div className="passion-one-regular">
        <RouletteGameScene />
      </div>
    );
    
};
export default CoreGameRoulette;
