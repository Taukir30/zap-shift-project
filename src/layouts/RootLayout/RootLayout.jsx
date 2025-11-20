import React from 'react';
import { Outlet } from 'react-router';
import Footer from '../../pages/shared/Footer/Footer';
import Navber from '../../pages/shared/Navbar/Navber';
import MyContainer from '../../components/MyContainer/MyContainer';

const RootLayout = () => {
    return (
        <div>
            <MyContainer>
                <Navber></Navber>
                <Outlet></Outlet>
                <Footer></Footer>
            </MyContainer>
        </div>
    );
};

export default RootLayout;