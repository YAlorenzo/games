import { FC } from "react";
import CoreGameSlots from "../../../games/slots";
import { twMerge } from "tailwind-merge";
import styles from "./../../page.module.css";
import titleImage from "../../../assets/slot/title.svg";
import { homeButtonIcon, settingButtonIcon } from "../../../assets/roulette";
import { ROUTES } from "../../../app/router/utils";
import { Link } from "react-router-dom";
import { useAppDispatch } from "../../../app/store/hook";
import { setModalSettingsActive } from "../../../games/slots/slices/slotSlice";


interface ISlotsPageProps {}

// eslint-disable-next-line no-empty-pattern
const SlotsPage: FC<ISlotsPageProps> = ({ }) => {
  
  const dispatch = useAppDispatch();
  const openModal = () => {
    dispatch(setModalSettingsActive());
  };
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
          <img src={settingButtonIcon} alt="icon" className="cursor-pointer" onClick={openModal}/>
        </div>
        <CoreGameSlots />
      </div>
    </div>
  );
};

export default SlotsPage;
