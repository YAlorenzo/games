import { FC } from "react";
import CoreGameSlots from "../../../games/slots";
import { twMerge } from "tailwind-merge";
import styles from "./../../page.module.css";
import titleImage from "../../../assets/slot/title.svg";
import { friendsButtonIcon, homeButtonIcon, settingButtonIcon } from "../../../assets/roulette";
import { ROUTES } from "../../../app/router/utils";
import { Link } from "react-router-dom";

interface ISlotsPageProps {}

const SlotsPage: FC<ISlotsPageProps> = ({}) => {
  return (
    <div>
      <div
        className={twMerge(
          "h-screen flex justify-center items-center relative",
          styles.slots
        )}
      >
        <div className="absolute top-[5%] left-[50%]  translate-x-[-50%] z-10">
          <img src={titleImage} />
        </div>

        <div className="max-w-[1300px] flex gap-4 absolute top-[5%] right-6 z-10 justify-end mx-auto py-6">
          <Link to={ROUTES.main} className="font-bold">
            <img src={homeButtonIcon} alt="icon" />
          </Link>
          <img src={friendsButtonIcon} alt="icon" className="cursor-pointer" />
          <img src={settingButtonIcon} alt="icon" className="cursor-pointer" />
        </div>
        <CoreGameSlots />
      </div>
    </div>
  );
};

export default SlotsPage;
