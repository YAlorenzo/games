import { FC } from "react";
import { Link } from "react-router-dom";
import { ROUTES } from "../../../app/router/utils";
import CoreGameRoulette from "../../../games/roulette";
import styles from '../../page.module.css';
import { homeButtonIcon, settingButtonIcon } from "../../../assets/roulette";
import { useAppDispatch } from "../../../app/store/hook";
import { setModalSettingsActive } from "../../../games/roulette/slice/rouletteSlice";

interface IRoulletePageProps {}

// eslint-disable-next-line no-empty-pattern
const RoulletePage: FC<IRoulletePageProps> = ({ }) => {
  const dispatch = useAppDispatch();
  const openModal = () => {
    dispatch(setModalSettingsActive());
  }
  return (
    <div className={styles.roulette}>
      <div className="max-w-[1300px] flex gap-4 justify-end mx-auto py-6">
        <Link to={ROUTES.main} className="font-bold">
          <img src={homeButtonIcon} alt="icon" />
        </Link>
        <img
          src={settingButtonIcon}
          alt="icon"
          className="cursor-pointer"
          onClick={openModal}
        />
      </div>
      <CoreGameRoulette />
    </div>
  );
};

export default RoulletePage;
