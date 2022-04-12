import React from 'react';
import './Home.css';
import Singles from './Single/Singles';
import Double from './Double/Doubles';
import Meeting from './Meeting/Meetings';
import Conference from './Conference/Conferences';

const Home = () => {
    return (
        <div className='home-container'>
            <Singles></Singles>
            <Double></Double>
            <Meeting></Meeting>
            <Conference></Conference>
        </div>
    );
};

export default Home;