import { Container, Sprite } from "@pixi/react";
import lineImage from "../../../../assets/slot/line.png";

import { FC } from "react";

interface IBodyPXProps {}

const BodyPX: FC<IBodyPXProps> = () => {
  return (
    <Container>
      <Sprite image={lineImage} x={380} y={75} />
      <Sprite image={lineImage} x={510} y={75} />
      <Sprite image={lineImage} x={630} y={75} />
      <Sprite image={lineImage} x={770} y={75} />
    </Container>
  );
};

export default BodyPX;
