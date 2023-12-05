import React from 'react';
import Navbar from '../../Shared/Navbar/Navbar';
import Banner from '../../Components/Banners/Banner';
import OurService from '../../Components/OurService/OurService';
import HomeContact from '../../Components/HomeContact/HomeContact';

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Banner></Banner>
            <div className='container mx-auto'>
                <OurService></OurService>
                <div className='container mx-auto'>
                <HomeContact></HomeContact>
                </div>
            </div>
        </div>
    );
};

export default Home;