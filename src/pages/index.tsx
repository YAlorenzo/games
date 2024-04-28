import React, { FC, useEffect } from "react";
import { Link } from "react-router-dom";
import { ROUTES } from "../app/router/utils";
// import { useAppSelector } from "../app/store/hook";
// import { selectUserNickname } from "../entities/user/slices/userSlice";
import { useGetUserQuery } from "../entities/user/api/userApi";
import { sound } from "@pixi/sound";
import { roulettePrev, slotPrev } from "../assets/main";

interface IMainPageProps {}

const MainPage: FC<IMainPageProps> = ({}) => {
  // const nickname = useAppSelector(selectUserNickname);

  const { data: users } = useGetUserQuery({
    userId: 13,
  });

  useEffect(() => {
    sound.stopAll();
  }, []);
  return (
    <div className="flex gap-4 justify-center text-fuchsia-900 font-bold passion-one-regular mt-9">
      <div>
        <h2 className="uppercase text-[#22c204] text-center text-[35px]">
          Roulette
        </h2>
        <Link to={ROUTES.games.roulette}>
          <div className="border-[3px] border-[#22c204] rounded-3xl pt-1 px-1 pb-7 bg-[#101a0e] relative">
            <div className=" rounded-3xl overflow-hidden mx-auto">
              <img
                src={roulettePrev}
                alt="icon"
                className="w-full h-full block"
              />
            </div>
            <div
              className="rounded-2xl border-[3px] bg-[#101a0e] text-white border-[#22c204] text-[20px]
             absolute -bottom-5 left-[36%] flex justify-center items-center w-[120px] "
            >
              PLAY
            </div>
          </div>
        </Link>
      </div>
      <div>
        <h2 className="uppercase text-[#22c204] text-center text-[35px]">
          slots
        </h2>
        <Link to={ROUTES.games.slots}>
          <div className="border-[3px] border-[#22c204] rounded-3xl pt-1 px-1 pb-7 bg-[#101a0e] relative">
            <div className=" rounded-3xl overflow-hidden mx-auto">
              <img src={slotPrev} alt="icon" className="w-full h-full block" />
            </div>
            <div
              className="rounded-2xl border-[3px] bg-[#101a0e] text-white border-[#22c204] text-[20px]
             absolute -bottom-5 left-[36%] flex justify-center items-center w-[120px] "
            >
              PLAY
            </div>
          </div>
        </Link>
      </div>
      <div>
        <h2 className="uppercase text-[#22c204] text-center text-[35px]">
          Hummers
        </h2>
        <Link to={ROUTES.games.hummer}>
          <div className="border-[3px] border-[#22c204] rounded-3xl pt-1 px-1 pb-7 bg-[#101a0e] relative">
            <div className=" rounded-3xl overflow-hidden mx-auto">
              <img
                src={roulettePrev}
                alt="icon"
                className="w-full h-full block"
              />
            </div>
            <div
              className="rounded-2xl border-[3px] bg-[#101a0e] text-white border-[#22c204] text-[20px]
             absolute -bottom-5 left-[36%] flex justify-center items-center w-[120px] "
            >
              PLAY
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default MainPage;
