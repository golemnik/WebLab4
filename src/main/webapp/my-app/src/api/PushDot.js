import Dot from "../components/Dot";

function PushDot (dot) {
    let sdot = new Dot(dot.x, dot.y, dot.r)
    console.log(sdot)
    fetch('api/dots',
        {
            method: 'POST',
            headers: {'Content-Type': 'application/json;charset=utf-8'},
            body: JSON.stringify(sdot)
        })
}

export default PushDot