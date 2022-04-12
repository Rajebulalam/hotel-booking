import { useEffect, useState } from "react"

const UseConference = () => {
    const [conferenceRoom, setConferenceRoom] = useState([]);

    useEffect(() => {
        fetch('conference.json')
            .then(res => res.json())
            .then(data => setConferenceRoom(data))
    }, [])

    return [conferenceRoom, setConferenceRoom];
}

export default UseConference;