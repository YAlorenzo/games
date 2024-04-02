import { Container } from "@pixi/react";
import { FC, useEffect } from "react";
import HummerPitPX from "./PitPX";
import * as PIXI from "pixi.js";

import spritesheet from "../../../../../assets/hummer/sprite-mole.json";
import { useState } from "react";
import { useAppSelector } from "../../../../../app/store/hook";
import { selectHummerPits } from "../../../slices/hummerCoreSlice";

interface IPitsPXProps {}

const PitsPX: FC<IPitsPXProps> = ({}) => {
  const [frames, setFrames] = useState<PIXI.Texture<PIXI.Resource>[]>();
  const pits = useAppSelector(selectHummerPits);


  useEffect(() => {
    const stringSprite = JSON.stringify(spritesheet);
    PIXI.Assets.load(stringSprite).then(() => {
      const names = ["mole-001.svg", "mole-002.svg", "mole-003.svg"];
      const genFrames = names.map((name) => {
        console.log(PIXI.Texture.from(name));
        return PIXI.Texture.from(name);
      });
      // console.log(genFrames);
      setFrames(genFrames);
    });
  }, []);

  return (
    <Container x={25} y={50}>
      {pits.map((pit, idx) => (
        <HummerPitPX key={`pit${idx}`} frames={frames} {...pit} />
      ))}
    </Container>
  );
};

export default PitsPX;
