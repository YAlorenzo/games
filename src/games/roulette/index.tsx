import React, { FC } from "react";
import RouletteGameScene from "./scenes/GameScene";

interface ICoreGameRouletteProps {}

const CoreGameRoulette: FC<ICoreGameRouletteProps> = ({ }) => {
    return (
      <div className="passion-one-regular">
        <RouletteGameScene />
      </div>
    );
    
};
export default CoreGameRoulette;
