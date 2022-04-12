import React from 'react';
import './Doubles.css';
import UseDouble from '../../../Hooks/UseDouble';
import Double from '../Double/Double';

const Doubles = () => {

    const [doubleRoom, setDoubleRoom] = UseDouble();

    return (
        <div className='doubles-container'>
            <h2>Double Room</h2>
            <div className='doubles-details'>
                {
                    doubleRoom.map(double => <Double
                        double={double}
                        key={double.id}
                    ></Double>)
                }
            </div>
        </div>
    );
};

export default Doubles;