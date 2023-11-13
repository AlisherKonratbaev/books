import React from 'react';
import { Outlet } from 'react-router-dom';
import { Main, Rectangle } from '../assets/styles/main';
import Header from "./Header";

const Layout = () => {
    return (
        <Main>
            <Rectangle />
            <Header />
            <Outlet />
        </Main>
    );
};

export default Layout;