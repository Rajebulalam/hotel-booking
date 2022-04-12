import React from 'react';
import UseMeeting from '../../../Hooks/UseMeeting';
import './Meetings.css';

const Meetings = () => {

    const [meetingRoom, setMeetingRoom] = UseMeeting();

    return (
        <div>
            <h2>MeetingRoom</h2>
        </div>
    );
};

export default Meetings;