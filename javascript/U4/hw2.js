// 1
class Shape {
    constructor(type) {
        this.type = type;
    }

    getType() {
        return this.type;
    }
}

class Triangle extends Shape {
    constructor(a, b, c) {
        super('Triangle');
        // -> this.type = 'Trianle';
        this.a = a;
        this.b = b;
        this.c = c;
    }
}

Triangle.prototype.getPerimeter = function () {
    return this.a + this.b + this.c;
};

var t = new Triangle(1, 2, 3);
// console.log(t.constructor === Triangle);

// console.log(Shape.prototype.isPrototypeOf(t));

// console.log(t.getPerimeter());

// console.log(t.getType());

// console.log('\n');

for (let p in t) {
    // get all properties of t including inherited properties (from prototype)
    // console.log(p);

    if (t.hasOwnProperty(p)) console.log(p);
}
// console.log(Object.getOwnPropertyNames(t));

// 2 //I don't think this is what the question asks. It may want us to create a prototype function for Array
function shuffle(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
        const randomIdx = Math.floor(Math.random() * arr.length);
        const removedElement = arr.splice(randomIdx, 1);
        arr.push(...removedElement);
        // arr = [...arr.slice(0, randomIdx), ...arr.slice(randomIdx + 1), arr[randomIdx]];
    }
    // return arr;
}

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const newArr = shuffle(arr);
console.log(arr);
