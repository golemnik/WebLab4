import React from "react";
import PullDots from "../api/PullDot"
import "../css/main.css"
import {useSelector} from "react-redux";

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

function Row (dot, id) {
    return (
        <tr key={id} className="hover">
            <td> {dot.x} </td>
            <td> {dot.y} </td>
            <td> {dot.r} </td>
            <td> {dot.hit.toString()} </td>
        </tr>
    )
}

function ResultTable () {
    const dots = useSelector((state) => state.dots.value).map(dot => dot.payload)
    let counter = 0;
    return (
        <div className="res">
            <table>
                <thead>
                <RowHeader/>
                </thead>
                <tbody >
                {dots.map(dot =>
                    Row(dot, counter++)
                )}
                </tbody>
            </table>
        </div>
    )
}

export default ResultTable