import React, {useState} from "react";
import funcs from "./Draw";
import pullDot from "../../api/PullDot";
import pushDot from "../../api/PushDot";
import {useDispatch, useSelector} from "react-redux";
import {addDot} from "../../store/DotsSlice"


function dott () {
    document.querySelectorAll("tr[class=hover]").forEach(
        (row) => {
            let x = row.cells[0].innerHTML;
            let y = row.cells[1].innerHTML;
            let r = row.cells[2].innerHTML;
            let hit = row.cells[3].innerHTML;
            // alert(hit);
            row.addEventListener("mouseover", function () {
                funcs.darkDot(x, y, r, hit, pullDot);
            });
            row.addEventListener("mouseout", function () {
                funcs.lightDot(pullDot);
            });
        });
}



function ControlledGraph () {
    const dots = useSelector((state) => state.dots.value).map(dot => dot.payload)
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
                dispatch(addDot({x:xx, y:yy, r:1}))
                pushDot({x:xx, y:yy, r:1});
            }
        }
    }


    funcs.draw(dots, r)
    return (
        <div className="can">
            <canvas id="canvas"
                    width={width}
                    height={height}
                    onClickCapture={setDot}>
            </canvas>
        </div>
    )
}

export default ControlledGraph