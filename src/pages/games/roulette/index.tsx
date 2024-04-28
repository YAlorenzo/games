import React, { FC } from "react";
import { Link } from "react-router-dom";
import { ROUTES } from "../../../app/router/utils";
import CoreGameRoulette from "../../../games/roulette";
import styles from '../../page.module.css';
import { friendsButtonIcon, homeButtonIcon, settingButtonIcon } from "../../../assets/roulette";

interface IRoulletePageProps {}

const RoulletePage: FC<IRoulletePageProps> = ({ }) => {
  return (
    <div className={styles.roulette}>
      <div className="max-w-[1300px] flex gap-4 justify-end mx-auto py-6">
        <Link to={ROUTES.main} className="font-bold">
          <img src={homeButtonIcon} alt="icon"/>
        </Link>
        <img src={friendsButtonIcon} alt="icon" className="cursor-pointer"/>
        <img src={settingButtonIcon} alt="icon" className="cursor-pointer"/>
      </div>

      <CoreGameRoulette />
    </div>
  );
};

export default RoulletePage;
