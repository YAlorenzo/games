import React, { FC } from "react";
import { Link } from "react-router-dom";
import { ROUTES } from "../../../app/router/utils";
import CoreGameRoulette from "../../../games/roulette";
import styles from '../../page.module.css';

interface IRoulletePageProps {}

const RoulletePage: FC<IRoulletePageProps> = ({}) => {
  return (
    <div className={styles.roulette}>
      <Link to={ROUTES.main} className="font-bold">
        return to Main Page!
      </Link>

      <CoreGameRoulette />
    </div>
  );
};

export default RoulletePage;
