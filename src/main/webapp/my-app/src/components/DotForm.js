import React, {useState} from "react";
import PushDot from "../api/PushDot";
import DeleteDots from "../api/DeleteDots";
import Dot from "./Dot"
import {useDispatch} from "react-redux";
import {deleteDots} from "../store/DotsSlice"

function DotForm () {
    const dispatch = useDispatch();
    const [dot, setDot] = useState(new Dot(0,0,0));
    // let dot = new Dot(0,0,0);

    function uX (event) {
        setDot(new Dot(event.target.value, dot.y, dot.r));
        // dot.x = event.target.value;
    }
    function uY (event) {
        setDot(new Dot(dot.x, event.target.value, dot.r));
        // dot.y = event.target.value;
    }
    function uR (event) {
        setDot(new Dot(dot.x, dot.y, event.target.value));
        // dot.r = event.target.value;
    }


    function handleSubmit(event) {
        event.preventDefault();
        PushDot(dot);
        setDot(new Dot(0,0,0));
        // dot = new Dot(0,0,0);
    }

    function handleDeleteSubmit(event) {
        event.preventDefault();
        DeleteDots();
        dispatch(deleteDots());
    }

    return (
        <div className="forma">
            <form onSubmit={handleSubmit}>
                <div className="x">
                    <label>X = <input onChange={uX} value={dot.x}/> </label> <br/>
                </div>
                <div className="y">
                    <label>Y = <input onChange={uY} value={dot.y}/> </label> <br/>
                </div>
                <div className="r">
                    <label>R = <input onChange={uR} value={dot.r}/> </label> <br/>
                </div>
                <div className="sub">
                    <button type="submit" > submit </button>
                </div>
            </form>
            <div className="sub" >
                <button type="submit" onClick={handleDeleteSubmit}> Delete </button>
            </div>
        </div>
    )
}

export default DotForm