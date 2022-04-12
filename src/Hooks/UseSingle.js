import { useEffect, useState } from "react";

const UseSingle = () => {
    const [singleRoom, setRoom] = useState([]);

    useEffect(() => {
        fetch('single.json')
            .then(res => res.json())
            .then(data => setRoom(data))
    }, [])

    return [singleRoom, setRoom];

}

export default UseSingle;