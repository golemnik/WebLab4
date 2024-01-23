import GPoint from "./GPoint";

function convert (inputX, inputY, inputR, hit, canvasCenter, canvasR) {
    return new GPoint(
        (inputX / inputR) * canvasR + canvasCenter.x,
        (-inputY / inputR) * canvasR + canvasCenter.y,
        hit);
}

export default convert;