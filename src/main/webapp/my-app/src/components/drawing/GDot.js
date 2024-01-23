function dot (canvasContext, coords, borderColor, fillColor) {
    canvasContext.beginPath();
    canvasContext.lineWidth = 0.5;
    canvasContext.arc(coords.x, coords.y, 4, 0, 2*Math.PI, true);
    canvasContext.strokeStyle = borderColor;
    canvasContext.fillStyle = fillColor;
    canvasContext.fill();
    canvasContext.stroke();
    canvasContext.closePath();
}

export default dot;