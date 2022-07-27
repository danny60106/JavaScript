// class
class Circle {
  constructor(radius) {
    this.radius = radius;
  }
  getArea() {
    return this.radius * this.radius * Math.PI;
  }
}

let c1 = new Circle(5);
console.log(c1.radius);
console.log(c1.getArea());

let c2 = new Circle(10);
console.log(c2.radius);
console.log(c2.getArea());
