import React from 'react';
import UseDouble from '../../../Hooks/UseDouble';
import './Doubles.css';

const Doubles = () => {

    const [doubleRoom, setDoubleRoom] = UseDouble();

    return (
        <div>
            <h2>Double Room</h2>
        </div>
    );
};

export default Doubles;