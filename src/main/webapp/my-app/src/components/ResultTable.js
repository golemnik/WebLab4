import React from "react";
import PullDots from "../api/PullDot"
import "../css/main.css"

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

function Row (dot) {
    return (
        <tr className="hover">
            <td> {dot.x} </td>
            <td> {dot.y} </td>
            <td> {dot.r} </td>
            <td> {dot.hit.toString()} </td>
        </tr>
    )
}

function ResultTable () {
    let dots = PullDots();
    return (
        <div className="res">
            <table>
                <thead>
                <RowHeader/>
                </thead>
                <tbody >
                {dots.map(dot =>
                    Row(dot)
                )}
                </tbody>
            </table>
        </div>
    )
}

export default ResultTable