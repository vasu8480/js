class Polygon {
  constructor(sides) {
    this.sides = sides;
    this.perimeter = function() {
    return sides.reduce((a, b) => a+b, 0);
    }
  }
}
