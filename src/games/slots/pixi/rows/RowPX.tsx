import { Container, Sprite, useTick } from "@pixi/react";
import { FC, useState } from "react";
import { TSlotRow } from "./utils";
import { useAppSelector } from "../../../../app/store/hook";
import { selectSlotLifecycle, SlotLifecycle } from "../../slices/slotSlice";

interface IRowPXProps {
  rowID: number;
  activeItemID: number;
  slotRow: TSlotRow[];
}

const ITEM_HEIGHT = 100;
const SPEED = 40;
const DELTA_ALIGN_CENTER = 200;

const RowPX: FC<IRowPXProps> = ({ slotRow, rowID, activeItemID }) => {
  const lifecycle = useAppSelector(selectSlotLifecycle);
  const isStopping = lifecycle === SlotLifecycle.STOPPING;
  const isPlaying = lifecycle === SlotLifecycle.PLAY;

  const FULL_HEIGHT_ROW = slotRow.length * ITEM_HEIGHT;
  const currentIndexRowItem = slotRow.findIndex(
    (rowItem) => rowItem.id === activeItemID
  );
  const currentPosition = -(
    currentIndexRowItem * ITEM_HEIGHT -
    DELTA_ALIGN_CENTER
  );
  const startPosition = currentPosition - FULL_HEIGHT_ROW;
  const speed = isStopping || isPlaying ? SPEED : 0;
  // console.log(speed, lifecycle);

  const [position, setPosition] = useState(-FULL_HEIGHT_ROW);
  const [fixPosition, setFixPosition] = useState(false);

  useTick((delta) => {
    if (position >= FULL_HEIGHT_ROW) {
      setPosition(-FULL_HEIGHT_ROW);
    } else {
      setPosition(position + speed * delta);
    }

    if (isStopping && !fixPosition) {
      setPosition(startPosition);
      setFixPosition(true);
    }
    if (isStopping && fixPosition) {
      const koeFC = currentPosition - position;
      if (koeFC > 0) {
        setPosition(position + speed * delta);
      } else {
        setPosition(currentPosition);
      }
    }
  });
  return (
    <Container x={(rowID - 1) * 120} y={position}>
      {/* FAKE TOP ROW */}
      <Container y={-FULL_HEIGHT_ROW}>
        {slotRow.map((row, idx) => (
          <Sprite
            key={row.id}
            image={row.image}
            x={0}
            y={idx * ITEM_HEIGHT}
            anchor={0.5}
            scale={0.5}
          />
        ))}
      </Container>

      {/* MAIN ROW */}
      <Container>
        {slotRow.map((row, idx) => (
          <Sprite
            key={row.id}
            image={row.image}
            x={0}
            y={idx * ITEM_HEIGHT}
            anchor={0.5}
            scale={0.5}
          />
        ))}
      </Container>

      {/* FAKE BOTTOM ROW */}
      <Container y={FULL_HEIGHT_ROW}>
        {slotRow.map((row, idx) => (
          <Sprite
            key={row.id}
            image={row.image}
            x={0}
            y={idx * ITEM_HEIGHT}
            anchor={0.5}
            scale={0.5}
          />
        ))}
      </Container>
    </Container>
  );
};

export default RowPX;
