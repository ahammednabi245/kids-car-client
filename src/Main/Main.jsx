import React from 'react';
import NavigationBar from '../components/Shared/NavigationBar/NavigationBar';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Shared/Footer/Footer';

const Main = () => {
    return (
        <div>
            <div className=''>
            <NavigationBar></NavigationBar>
            <Outlet></Outlet>
            <Footer></Footer>
            </div>
        </div>
    );
};

export default Main;