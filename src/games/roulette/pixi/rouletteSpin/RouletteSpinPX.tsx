import React, { FC, useState } from "react";
import { Container, Sprite, useTick } from "@pixi/react";
import {
  arrow,
  bgRoulette,
  externalCircle,
  internalCircle,
  mediumCircle,
  wheel,
} from "../../../../assets/roulette";
import { useAppDispatch, useAppSelector } from "../../../../app/store/hook";
import {
  selectRouletteRotationInP,
  selectRouletteSpinSpeed,
  setRouletteSpinDegreesRotation,
  setRouletteSpinSpeed,
} from "../../slice/rouletteSpinSlice";
import { radianToDegrees } from "../../../../shared/lib/degrees/radianToDegrees";
import {
  RouletteLifecycle,
  setRouletteLifecycle,
} from "../../slice/rouletteSlice";
import { sound } from "@pixi/sound";
import SOUNDS_ROULETTE from "../../scenes/GameScene/config";

interface IRouletteSpinPXProps {}

const POSITION_SPIN = {
  // x: 200,
  // y: 300,

  x: 264,
  y: 286,
};
const POSITION_ARROW = {
  x: 264,
  y: 160,
  rotation: -0.45,
};

const RouletteSpinPX: FC<IRouletteSpinPXProps> = ({}) => {
  const speed = useAppSelector(selectRouletteSpinSpeed);
  const dispatch = useAppDispatch();
  const rotationInProgress = useAppSelector(selectRouletteRotationInP);
  const [rotationMedium, setRotationMedium] = useState(0);
  const [rotationWheel, setRotationWheel] = useState(0);
  useTick((delta) => {
    if (rotationInProgress) {
      const rotation = delta * speed;
      setRotationMedium((prev) => prev + rotation);
      setRotationWheel((prev) => prev - rotation);
      if (speed < 0.0005) {
        dispatch(setRouletteSpinSpeed(0));
        dispatch(
          setRouletteSpinDegreesRotation(
            radianToDegrees(rotationMedium % (Math.PI * 2))
          )
        );
        dispatch(setRouletteLifecycle(RouletteLifecycle.FINISHED));
        sound.stop(SOUNDS_ROULETTE.SPIN);
      } else {
        dispatch(setRouletteSpinSpeed(null));
      }
    }
  });
  return (
    <Container>
      <Sprite x={425} y={500} anchor={1} image={bgRoulette} />
      <Sprite
        image={externalCircle}
        x={POSITION_SPIN.x}
        y={POSITION_SPIN.y}
        anchor={0.5}
      />
      <Sprite
        image={mediumCircle}
        x={POSITION_SPIN.x}
        y={POSITION_SPIN.y}
        rotation={rotationMedium}
        anchor={0.5}
      />
      <Sprite
        image={internalCircle}
        x={POSITION_SPIN.x}
        y={POSITION_SPIN.y}
        anchor={0.5}
      />
      <Sprite
        image={wheel}
        rotation={rotationWheel}
        x={POSITION_SPIN.x}
        y={POSITION_SPIN.y}
        anchor={0.5}
      />
      <Sprite
        image={arrow}
        x={POSITION_ARROW.x}
        y={POSITION_ARROW.y}
        rotation={POSITION_ARROW.rotation}
        anchor={0.5}
      />
    </Container>
  );
};

export default RouletteSpinPX;
