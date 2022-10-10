class Rectangle {
    constructor(w, h) {
        this.w = w;
        this.h = h;
    }
}
Rectangle.prototype.area = function() {
    return this.h * this.w;
}

class Square extends Rectangle {
    constructor(side) {
        super(side, side);
    }
}
