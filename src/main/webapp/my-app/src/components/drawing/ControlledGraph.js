import React from "react";
import draw from "Draw";

function canv () {
    const can = document.querySelector("canvas");
    const r = (can.width+can.height)/25;
    can.addEventListener('click', function (event) {
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
                document.querySelector("div.x input").value = xx;
                document.querySelector("div.y input").value = yy;
                document.querySelector("div.r input").value = 1;
                document.querySelector("div.but input[type=submit]").click();
            }
        }
    });
}

function dott (arr) {
    document.querySelectorAll("tr[class=hover]").forEach(
        (row) => {
            let x = row.cells[0].innerHTML;
            let y = row.cells[1].innerHTML;
            let r = row.cells[2].innerHTML;
            let hit = row.cells[3].innerHTML;
            // alert(hit);
            row.addEventListener("mouseover", function () {
                darkDot(x, y, r, hit, arr);
            });
            row.addEventListener("mouseout", function () {
                lightDot(arr);
            });
        });
}

class ControlledGraph extends React.Component {
    width="600";
    height="600";
    r = (this.width + this.height)/25;
    render() {
        return (
            <div className="can">
                <canvas id="canvas" width={this.width} height={this.height}>
                    const arr = <h:outputText value="#{resultBean.jsArray}"/>;
                    draw(arr, this.r);
                </canvas>
            </div>
        )
    }
}
