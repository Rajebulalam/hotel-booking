import React from 'react';
import './Singles.css';
import UseSingle from '../../../Hooks/UseSingle';
import Single from '../Single/Single';

const Singles = () => {

    const [singleRoom, setRoom] = UseSingle();

    return (
        <div className='singles-container'>
            <h2>Single Room</h2>
            <div className='singles-details'>
                {
                    singleRoom.map(single => <Single
                        single={single}
                        key={single.id}
                    ></Single>)
                }
            </div>
        </div>
    );
};

export default Singles;