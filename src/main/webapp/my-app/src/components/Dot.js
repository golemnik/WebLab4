class Dot {
    x
    y
    r
    hit
    constructor(x, y, r) {
        this.x = x;
        this.y = y;
        this.r = r;
        this.hit = this.checkHit(x, y, r);
    }

    checkHit(x, y, r) {
        return x >= 0
            ? y >= 0
                ? -x + r > y
                : false
            : y >= 0
                ? x*x + y*y <= r*r
                : x >= -r/2 && y >= -r;
    }
}

export default Dot