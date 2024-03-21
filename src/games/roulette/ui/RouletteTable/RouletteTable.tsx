import React, { FC } from "react";
import { ROULETTE_TABLE_NUMBERS } from "./initData";
import { twMerge } from "tailwind-merge";
import { selectActiveNumber, setActiveNumber } from "../../slice/rouletteSlice";
import { useAppDispatch, useAppSelector } from "../../../../app/store/hook";
import SOUNDS_ROULETTE from "../../scenes/GameScene/config";
import { sound } from "@pixi/sound";

interface IRouletteTableProps {}

const RouletteTable: FC<IRouletteTableProps> = ({}) => {
  const activeNumber = useAppSelector(selectActiveNumber);
  const dispatch = useAppDispatch();
  const handleClick = (number: number) => {
    sound.play(SOUNDS_ROULETTE.NUMBER);
    dispatch(setActiveNumber(number));
  };
  return (
    <div className="flex flex-wrap w-[600px]">
      {ROULETTE_TABLE_NUMBERS.map(({ number, color }) => (
        <div
          onClick={() => handleClick(number)}
          className={twMerge(
            "w-[50px] h-[50px] flex text-white font-medium justify-center cursor-pointer hover:border-yellow-400 items-center border border-solid border-white text-xl",
            color === "red" && "bg-red",
            color === "black" && "bg-black",
            activeNumber === number && "border-yellow-400 border-2"
          )}
        >
          {number}
        </div>
      ))}
    </div>
  );
};

export default RouletteTable;
