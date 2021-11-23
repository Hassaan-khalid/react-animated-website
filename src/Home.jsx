import React from 'react';
import logo from '../src/images/blogging.svg';
import Common from './Common';
const Home = () => {
    return (
        <>
            <Common
                name="Excel Your Business with"
                imgsrc={logo}
                visit="/Service"
                btname="Get Started"
            />
        </>
    );
}

export default Home;
