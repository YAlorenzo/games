import React, { FC } from 'react';
import { Outlet } from 'react-router-dom';

interface IMainLayoutProps {

};

const MainLayout: FC<IMainLayoutProps> = ({ }) => {
    return (
        <div>
            <div>
               Heard
            </div>
            <Outlet />
        </div>
    )
};

export default MainLayout;