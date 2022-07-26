import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from "../component/Header/index";

const MainLayouts: React.FC = () => {
    return (
        <div className="container">
            <Header/>
            <Outlet/>
        </div>
    );
};

export default MainLayouts;