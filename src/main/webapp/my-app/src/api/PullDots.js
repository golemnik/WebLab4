import {useState} from "react";

function PullDots () {
    const [dots, setDots] = useState([]);
    fetch('api/dots')
        .then(response => response.json())
        .then(data => {setDots(data)})
    return dots;
}

function PushDot (dot) {
    // fetch('api/dots/',{method: 'POST', int: id});
}

export default PullDots