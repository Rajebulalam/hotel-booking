import React from 'react';
import './Meetings.css';
import UseMeeting from '../../../Hooks/UseMeeting';
import Meeting from '../Meeting/Meeting';

const Meetings = () => {

    const [meetingRoom, setMeetingRoom] = UseMeeting();

    return (
        <div className='meetings-container'>
            <h2>MeetingRoom</h2>
            <div className='meetings-details'>
                {
                    meetingRoom.map(meeting => <Meeting
                        meeting={meeting}
                        key={meeting.id}
                    ></Meeting>)
                }
            </div>
        </div>
    );
};

export default Meetings;