import React from 'react';
import UseSingle from '../../../Hooks/UseSingle';
import './Singles.css';

const Singles = () => {

    const [singleRoom, setRoom] = UseSingle();

    return (
        <div>
            <h2>Single Room</h2>
        </div>
    );
};

export default Singles;