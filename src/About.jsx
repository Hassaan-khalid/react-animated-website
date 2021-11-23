import React from 'react';
import logo from '../src/images/blogging.svg';
import Common from './Common';
const About = () => {
    return (
        //Making props and than passed to Common page
        <>
            <Common name="Welcome to About Page"
                imgsrc={logo}
                visit="/Contact"
                btname="Contact Now"
            />
        </>
    );
}

export default About;
