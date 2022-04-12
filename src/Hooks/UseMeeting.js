import { useEffect, useState } from "react"

const UseMeeting = () => {
    const [meetingRoom, setMeetingRoom] = useState([]);

    useEffect(() => {
        fetch('meeting.json')
            .then(res => res.json())
            .then(data => setMeetingRoom(data))
    }, [])

    return [meetingRoom, setMeetingRoom];
}

export default UseMeeting;