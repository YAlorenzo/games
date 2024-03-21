import React, { FC } from "react";
import { ROUTES } from "../../../app/router/utils";
import { Link } from "react-router-dom";
import CoreGameSlots from "../../../games/slots";

interface ISlotsPageProps {}

const SlotsPage: FC<ISlotsPageProps> = ({}) => {
 return (
   <div>
     <Link to={ROUTES.main} className="font-bold">
       return to Main Page!
     </Link>

     <CoreGameSlots />
   </div>
 );
};

export default SlotsPage;
