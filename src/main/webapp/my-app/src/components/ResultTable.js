import React from "react";
import "../css/main.css"
import {useSelector} from "react-redux";
import funcs from "./drawing/Draw";

function RowHeader () {
    return (
        <tr>
            <td> X </td>
            <td> Y </td>
            <td> R </td>
            <td> Hit </td>
        </tr>
    )
}

function Row (dots, dot, id) {

    function dark () {
        funcs.darkDot(dot.x, dot.y, dot.r, dot.hit.toString(), dots)
    }

    function light () {
        funcs.lightDot(dots)
    }

    return (
        <tr key={id} className="hover"
            onMouseEnter={dark}
            onMouseOut={light}
        >
            <td> {dot.x} </td>
            <td> {dot.y} </td>
            <td> {dot.r} </td>
            <td> {dot.hit.toString()} </td>
        </tr>
    )
}

function ResultTable () {
    const dots = useSelector((state) => state.dots.value)
    let counter = 0;
    return (
        <div className="res">
            <table>
                <thead>
                <RowHeader/>
                </thead>
                <tbody >
                {dots.map(dot =>
                    Row(dots, dot, counter++)
                )}
                </tbody>
            </table>
        </div>
    )
}

export default ResultTable