import React, {useEffect, useRef, useState} from "react";
import funcs from "./Draw";
import pushDot from "../../api/PushDot";
import {useDispatch, useSelector} from "react-redux";
import {addDot} from "../../store/DotsSlice"
import Dot from "../Dot";

function ControlledGraph () {
    const dots = useSelector((state) => state.dots.value)
    const dispatch = useDispatch()

    const width=600;
    const height=600;
    const r = (width + height)/25;

    function setDot (event) {
        event.preventDefault();
        const can = document.querySelector("canvas");
        const r = (can.width+can.height)/25;
        let xx = (event.pageX - can.offsetLeft - can.width/2)/r;
        let yy = -(event.pageY - can.offsetTop - can.height/2)/r;
        if(xx > 5 || xx < -5) {
            alert("x {" + xx + "} is out of range");
        }
        else {
            if (yy > 5 || yy < -5) {
                alert("y {" + yy + "} is out of range");
            }
            else {
                const dot = new Dot(xx, yy, 1);
                dispatch(addDot({x: dot.x, y: dot.y, r: dot.r, hit: dot.hit}))
                pushDot({x:xx, y:yy, r:1});
            }
        }
    }
    const canvasRef = useRef(null);

    function callDraw() {
        const canvas = canvasRef.current;
        funcs.draw(canvas, dots, r)
    }

    useEffect(callDraw, []);

    callDraw();
    return (
        <div className="can">
            <canvas id="canvas"
                    ref={canvasRef}
                    width={width}
                    height={height}
                    onClickCapture={setDot}>
            </canvas>
        </div>
    )
}

export default ControlledGraph