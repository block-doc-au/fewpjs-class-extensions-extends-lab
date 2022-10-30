
class Polygon {
    constructor(sidesArray) {
      this.sidesArray = sidesArray;
    }

    get countSides() {
        return this.sidesArray.length;
      }

    get perimeter() {
    const sum = this.sidesArray.reduce((partialSum, a) => partialSum + a, 0);
    return sum; 

      }
  }
  
  class Triangle extends Polygon {
    get isValid() {
        if (this.countSides != 3) return false;

        else {
        let a = this.sidesArray[0];
        let b = this.sidesArray[1];
        let c = this.sidesArray[2];
        console.log(`Sides are ${a}, ${b} and ${c}.`);
        if (!((a+b) > c)) return false;
        if (!((b+c) > a)) return false;
        if (!((c+a) > b)) return false;
        } 
        return true;
    }
  }
  
  
  class Square extends Polygon {
    // inherits constructor from Pet
    get area(){
      const theArea = (this.sidesArray[0] * this.sidesArray[1]);
      return theArea;
    }

    get isValid(){
      let a = this.sidesArray[0];
        let b = this.sidesArray[1];
        let c = this.sidesArray[2];
        let d = this.sidesArray[3];
        console.log(`The sides are ${a}, ${b}, ${c} and ${d}.`);
        // if (a == b == c == d) return true;
        if ((a==b) && (b==c) && (c==d) && (d==a)) return true;
        else return false;
    }
  }
  

  const test1 = new Square([5,5,5,5]);
  const test2 = new Square([5,6,5,5]);

  console.log(`Square test1 is ; ${test1.isValid}`);
  console.log(`Square test2 is ; ${test2.isValid}`);


//  class Bird extends Pet  {
//     // inherits constructor from Pet
//     fly() {
//       return `${this.name} flies away!`
//     }
//   }
  
//   let dog = new Dog("Shadow", "woof");
//   let cat = new Cat("Missy", "meow");
//   let bird = new Bird("Tiki", "squawk");
  
//   dog.speak(); // Shadow says woof!
//   cat.speak(); // Missy says meow!
//   bird.speak(); // Tiki says squawk!
//   bird.fly(); // Tiki flies away!