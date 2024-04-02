import React, { FC } from "react";
import { ROUTES } from "../../../app/router/utils";
import { Link } from "react-router-dom";
import HummerCore from "../../../games/hummer";

interface IHummerPageProps {}

const HummerPage: FC<IHummerPageProps> = ({}) => {
  return (
    <div className="h-screen flex justify-center items-center">
      <div>
        <Link to={ROUTES.main} className="font-bold">
          return to Main Page!
        </Link>

        <HummerCore />
      </div>
    </div>
  );
};

export default HummerPage;
