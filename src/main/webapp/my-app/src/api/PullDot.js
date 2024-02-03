import store from "../store/Store";
import {addDot, fetchPoints, loadDots} from "../store/DotsSlice";
import dot from "../components/Dot";

function PullDot () {
    fetch('api/dots')
        .then(response => response.json())
        .then(data => {
            let dots = [];
            data.forEach(dot => {dots.push({x: dot.x, y: dot.y, r: dot.r, hit: dot.hit})})
            console.log("data", dots)
            // dots.forEach(dor => {store.dispatch(addDot(dot))})
            store.dispatch(loadDots(dots));
        })
    // store.dispatch(fetchPoints());
}

export default PullDot