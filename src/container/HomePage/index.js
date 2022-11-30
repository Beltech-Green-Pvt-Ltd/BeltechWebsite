import React from 'react';
import Home from '../../components/Home';
import Carrer from '../../components/Carrer';
import Footer from '../../components/Footer';
import OpenSource from '../../components/OpenSource';
import AboutUs from '../../components/AboutUs';
import ZeroCost from '../../components/ZeroCost';
import Impact from '../../components/Impact';
import OurProducts from '../../components/OurProducts';

const HomePage = () => {
    return (
        <div>
            <Home />
            <OurProducts />
            <AboutUs />
            <ZeroCost />
            <Impact />
            <OpenSource />
            <Carrer />
        </div>
    );
}

export default HomePage;