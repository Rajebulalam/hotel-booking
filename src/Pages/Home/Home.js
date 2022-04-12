import React from 'react';
import UseSingle from '../../Hooks/UseSingle';
import './Home.css';

const Home = () => {

    const [singleRoom, setRoom] = UseSingle();

    return (
        <div className='home-container'>
            <h2>Home Pages</h2>
        </div>
    );
};

export default Home;