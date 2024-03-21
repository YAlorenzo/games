import { Container, Sprite } from "@pixi/react";
import { FC } from "react";
import { bg } from "../../../../assets/roulette";

interface IBgPXProps {}

const BgPX: FC<IBgPXProps> = ({}) => {
  return (
      <Container>
          <Sprite
              x={0}
              y={0}
              anchor={{
                  x: 0,
                  y: 0
              }}
              image={bg}
          />
    </Container>
  );
};

export default BgPX;
