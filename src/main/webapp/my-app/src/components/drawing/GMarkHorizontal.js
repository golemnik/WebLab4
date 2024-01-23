function mark_h (canvasContext, point, text, color) {
    canvasContext.beginPath();
    canvasContext.lineWidth = 1.5;
    canvasContext.moveTo(point.x, point.y);
    canvasContext.lineTo(point.x+point.x/50, point.y);
    canvasContext.lineTo(point.x-point.x/50, point.y);
    canvasContext.strokeStyle = color;
    canvasContext.fillStyle = color;
    canvasContext.font = "12px serif";
    canvasContext.fillText(text, point.x + point.x/40, point.y - point.y/40);
    canvasContext.fill();
    canvasContext.stroke();
    canvasContext.closePath();
}

export default mark_h