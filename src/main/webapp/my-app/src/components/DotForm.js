import React, {useState} from "react";
import PushDot from "../api/PushDot";
import DeleteDots from "../api/DeleteDots";
import Dot from "./Dot"
import {useDispatch} from "react-redux";
import {addDot, deleteDots} from "../store/DotsSlice"

function DotForm () {
    const dispatch = useDispatch();
    const [dot, setDot] = useState(new Dot(1,1,1));

    function uX (event) {
        if (!/^[0-9]*$/.test(event.target.value)) {
            return
        }
        setDot(new Dot(event.target.value, dot.y, dot.r));
    }
    function uY (event) {
        if (!/^[0-9]*$/.test(event.target.value)) {
            return
        }
        setDot(new Dot(dot.x, event.target.value, dot.r));
    }
    function uR (event) {
        if (!/^[0-9]*$/.test(event.target.value)) {
            return
        }
        setDot(new Dot(dot.x, dot.y, event.target.value));
    }

    function validate (dot) {
        if (dot.x > 3 || dot.x < -3) {
            alert("x is out of bound.")
            return false;
        }
        if (dot.y > 3 || dot.y < -3) {
            alert("y is out of bound.")
            return false;
        }
        if (dot.r > 3 || dot.r < 0) {
            alert("r is out of bound.")
            return false;
        }
        return true;
    }

    function handleSubmit(event) {
        event.preventDefault();
        if (!validate(dot)) {
            return;
        }
        PushDot(dot);
        dispatch(addDot(dot));
        setDot(new Dot(1,1,1));
    }

    function handleDeleteSubmit(event) {
        event.preventDefault();
        DeleteDots();
        dispatch(deleteDots());
    }

    function handleResetSubmit(event) {
        event.preventDefault();
        setDot(new Dot(1,1,1));
    }


    return (
        <div className="forma">
            <form >
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
                    <button type="button" onClick={handleSubmit}> Submit </button>
                </div>
            </form>
            <div className="sub" >
                <button type="button" onClick={handleDeleteSubmit}> Delete </button>
            </div>
            <div className="sub" >
                <button type="button" onClick={handleResetSubmit}> Reset </button>
            </div>
        </div>
    )
}

export default DotForm