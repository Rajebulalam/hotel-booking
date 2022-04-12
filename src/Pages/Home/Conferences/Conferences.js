import React from 'react';
import UseConference from '../../../Hooks/UseConference';
import './Conferences.css';

const Conferences = () => {

    const [conferenceRoom, setConferenceRoom] = UseConference();

    return (
        <div>
            <h2>Conference Room</h2>
        </div>
    );
};

export default Conferences;