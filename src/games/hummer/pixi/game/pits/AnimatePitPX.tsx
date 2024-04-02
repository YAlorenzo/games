
import { FC } from "react";
import * as PIXI from "pixi.js";
import { IHummerPit } from "../../../slices/models/Pit";
import { AnimatedSprite } from "@pixi/react";

interface IHummerAnimatePitPXProps {
  frames: PIXI.Texture<PIXI.Resource>[];
  position: IHummerPit["position"];
}

const HummerAnimatePitPX: FC<IHummerAnimatePitPXProps> = ({
  frames,
  position,
}) => {
  if (!frames?.length) {
    return <></>;
  }
  return (
    <AnimatedSprite
      animationSpeed={0.05}
      isPlaying={true}
      textures={frames}
      anchor={{
        x: 0.5,
        y: 1,
      }}
      position={position}
      loop={false}
    />
  );
};

export default HummerAnimatePitPX;



