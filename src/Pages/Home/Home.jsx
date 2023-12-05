import React from 'react';
import Navbar from '../../Shared/Navbar/Navbar';
import Banner from '../../Components/Banners/Banner';
import OurService from '../../Components/OurService/OurService';

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Banner></Banner>
            <div className='container mx-auto'>
                <OurService></OurService>
            </div>
        </div>
    );
};

export default Home;