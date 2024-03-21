import React, { FC } from "react";
import { ROUTES } from "../../../app/router/utils";
import { Link } from "react-router-dom";

interface IHummerPageProps {}

const HummerPage: FC<IHummerPageProps> = ({}) => {
  return (
    <div>
      <Link to={ROUTES.main} className="font-bold">
        return to Main Page!
      </Link>

      <div>Hummer Page!</div>
    </div>
  );
};

export default HummerPage;
