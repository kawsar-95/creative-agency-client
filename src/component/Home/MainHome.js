import React from 'react';
import Home from '../Home';
import FeedBack from './FeedBack';
import HomeENd from './HomeENd';
import Logos from './Logos';
import OurWork from './OurWork';
import Services from './Services';

const MainHome = () => {
    return (
        <div>
            <Home></Home>
            <Logos></Logos>
            <Services></Services>
            <OurWork></OurWork>
            <FeedBack></FeedBack>
            <HomeENd></HomeENd>
        </div>
    );
};

export default MainHome;