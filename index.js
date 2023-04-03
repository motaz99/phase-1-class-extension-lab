// Your code here

class Polygon {
  constructor(shapeSides) {
    this.shapeSides = shapeSides;
  }

  get countSides() {
    return this.shapeSides.length;
  }

  get perimeter() {
    return this.shapeSides.reduce((acc, current) => acc + current, 0);
  }
}

class Triangle extends Polygon {
  get isValid() {
    const shapeSides = this.shapeSides;
    if (
      shapeSides[0] + shapeSides[1] > shapeSides[2] &&
      shapeSides[1] + shapeSides[2] > shapeSides[0]
    ) {
      return true;
    }
    return false;
  }
}

class Square extends Polygon {
  get isValid() {
    const shapeSides = this.shapeSides;
    let valid = true;
    for (let i = 0; i < shapeSides.length - 1; i++) {
      if (shapeSides[i] !== shapeSides[i + 1]) valid = false;
    }
    return valid;
  }

  get area() {
    return this.shapeSides[0] * this.shapeSides[0];
  }
}
