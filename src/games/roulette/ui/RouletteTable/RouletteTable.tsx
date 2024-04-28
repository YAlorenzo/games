import React, { FC } from "react";
import { ROULETTE_TABLE_NUMBERS } from "./initData";
import { twMerge } from "tailwind-merge";
import { selectActiveNumber, selectRouletteNumberReady, setActiveNumber, setRouletteNumberReady } from "../../slice/rouletteSlice";
import { useAppDispatch, useAppSelector } from "../../../../app/store/hook";
import SOUNDS_ROULETTE from "../../scenes/GameScene/config";
import { sound } from "@pixi/sound";

interface IRouletteTableProps {}

const RouletteTable: FC<IRouletteTableProps> = ({}) => {
  const activeNumber = useAppSelector(selectActiveNumber);
  const numberReady = useAppSelector(selectRouletteNumberReady);
  const dispatch = useAppDispatch();
  const handleClick = (number: number) => {
    sound.play(SOUNDS_ROULETTE.NUMBER);
    dispatch(setRouletteNumberReady(true));
    dispatch(setActiveNumber(number));
  };
  return (
    <div className={twMerge("flex flex-wrap pl-[50px] pr-0 w-[650px] outline  relative", numberReady === false && "outline-yellow-400 outline-[6px]")}>
      {ROULETTE_TABLE_NUMBERS.map(({ number, color }) => (
        <div
          onClick={() => handleClick(number)}
          className={twMerge(
            " flex text-white font-medium  justify-center  cursor-pointer hover:border-yellow-400 hover:border-[3px] items-center border  border-white text-xl",
            color === "red" && "bg-red w-[50px] h-[50px]",
            color === "white" && "bg-green-900 w-[50px] h-full absolute left-0",
            color === "black" && "bg-black w-[50px] h-[50px]",
            activeNumber === number && "text-yellow-400"
          )}
        >
          {number}
        </div>
      ))}
    </div>
  );
};

export default RouletteTable;
