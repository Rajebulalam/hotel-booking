import { useEffect, useState } from "react"

const UseDouble = () => {
    const [doubleRoom, setDoubleRoom] = useState([]);

    useEffect(() => {
        fetch('double.json')
            .then(res => res.json())
            .then(data => setDoubleRoom(data))
    }, [])

    return [doubleRoom, setDoubleRoom];
}

export default UseDouble;