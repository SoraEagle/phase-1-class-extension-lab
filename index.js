class Polygon{
    constructor(side){ //Only parameter is an Array of sides (value is the length).
        this.side = side;
    }
    get countSides(){ //Number of sides to the shape, or number of indexes in the Array.
        return this.side.length;
    }
    
    get perimeter(){
        const reducer = (prevVal, currVal) => prevVal + currVal;
        return this.side.reduce(reducer);
    }
}

class Triangle extends Polygon{
    //Sum of lengths of any two sides of triangle greater than length of 3rd side. 
    get isValid(){ // a + b > c && a + c > b && b + c > a
        return (this.side[0] + this.side[1] > this.side[2] && 
            this.side[0] + this.side[2] > this.side[1] && 
            this.side[1] + this.side[2] > this.side[0]);
    }
}

class Square extends Polygon{
    get isValid(){ //Getter method for determining whether shape is actual square (all sides are equal).
        return (this.side[0] === this.side[1] && 
            this.side[0] === this.side[2] && 
            this.side[0] === this.side[3]); //Boolean for "Are all 4 sides equal?"
    }

    get area(){ //Getter method for calculating area of square.
        //Area of a square = a * b || a * c || ... = Math.pow(side.length[...], 2)
        if(this.isValid === true) //If this is an actual square...
        return Math.pow(this.side[0], 2); //Can use any other side instead, or a*b, a*c, etc...
    }
}