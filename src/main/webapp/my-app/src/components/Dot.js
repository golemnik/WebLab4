class Dot {
    x
    y
    r
    hit
    constructor(x, y, r) {
        this.x = x;
        this.y = y;
        this.r = r;
        this.hit = this.chekHit(x, y, r);
    }

    chekHit(x, y, r) {
        return false;
    }
}

export default Dot