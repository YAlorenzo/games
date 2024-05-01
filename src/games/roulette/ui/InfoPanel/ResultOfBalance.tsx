import { FC, useEffect } from "react";
import { twMerge } from "tailwind-merge";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

interface ResultOfBalanceProps {
  win: boolean;
  currentBet: number;
  winBet: number;
}

const ResultOfBalance: FC<ResultOfBalanceProps> = ({
  win,
  currentBet,
  winBet,
}) => {
   
    

    useEffect(() => {
          gsap.to(".box", { y: 30, duration: 1 });
    }, [])
  return (
    <div
      className={twMerge(
        "text-[50px] absolute -top-[50px] right-10 z-20 box ",
        !win && "text-resultOfBalance__lose",
        win && "text-resultOfBalance__win"
      )}
    >
      {!win ? "-" + currentBet : "+" + winBet}
    </div>
  );
};

export default ResultOfBalance;
