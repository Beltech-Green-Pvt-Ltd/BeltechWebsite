import React from 'react';
import Home from '../../components/Home';
import Carrer from '../../components/Carrer';
import Footer from '../../components/Footer';
import OpenSource from '../../components/OpenSource';
import AboutUs from '../../components/AboutUs';
import ZeroCost from '../../components/ZeroCost';
import Impact from '../../components/Impact';

const HomePage = () => {
    return (
        <div>
            <Home />
            <AboutUs />
            <ZeroCost />
            <Impact />
            <OpenSource />
            <Carrer />
            <Footer />
        </div>
    );
}

export default HomePage;