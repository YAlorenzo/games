import { FC } from "react";
import { HummerMenuStartButton } from "../../ui/menu/startButton";

interface IHummerMenuSceneProps {}

const HummerMenuScene: FC<IHummerMenuSceneProps> = ({}) => {
  return (
      <div>
          <div>
              <div>Balance: 5000</div>
              <div>Last score result</div>
          </div>
         <HummerMenuStartButton />
    </div>
  );
};

export default HummerMenuScene;
