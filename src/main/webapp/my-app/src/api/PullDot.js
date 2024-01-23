import {useState} from "react";

function PullDot () {
    const [dots, setDots] = useState([]);
    fetch('api/dots')
        .then(response => response.json())
        .then(data => {setDots(data)})
    return dots;
}

export default PullDot