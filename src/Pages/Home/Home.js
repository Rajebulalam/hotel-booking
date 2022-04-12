import React from 'react';
import './Home.css';
import Singles from './Singles/Singles';
import Doubles from './Doubles/Doubles';
import Meetings from './Meetings/Meetings';
import Conferences from './Conferences/Conferences';

const Home = () => {
    return (
        <div className='home-container'>
            <Singles></Singles>
            <Doubles></Doubles>
            <Meetings></Meetings>
            <Conferences></Conferences>
        </div>
    );
};

export default Home;