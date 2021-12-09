class Polygon{
    constructor(side){ //Only parameter is an Array of sides (value is the length).
        this.side = side;
    }
    //Methods:
    get countSides(){ //Number of sides to the shape, or number of indexes in the Array.
        return this.side.length;
    }
    
    get perimeter(){
        const reducer = (prevVal, currVal) => prevVal + currVal;
        return this.side.reduce(reducer);
    }
}

class Triangle extends Polygon{
    //Assuming there are 3 sides to the shape...
    //Method(s):
    //Sum of lengths of any two sides of triangle greater than length of 3rd side. 
    //If take all sides of triangle and add them in pairs, sum is greater than (not equal to) third side. 
    //If that isn't true, then isn't possible to construct triangle with given lengths.
    get isValid(){ // a + b > c && a + c > b && b + c > a
        return (this.side[0] + this.side[1] > this.side[2] && 
            this.side[0] + this.side[2] > this.side[1] && 
            this.side[1] + this.side[2] > this.side[0]);
    }

    //Setter method?
}

class Square extends Polygon{
    //Assuming there are 4 sides to the shape...
    //Methods:
    get isValid(){
        return (this.side[0] === this.side[1] && 
            this.side[0] === this.side[2] && 
            this.side[0] === this.side[3]); //Boolean for "Are all 4 sides equal?"
        //Another way to check would be comparing area values ()
    }

    get area(){
        //Area of a square = a * b || a * c || a * d || b * c || b * d || c * d
        //Area of a square = Math.pow(side.length, 2); (a^2 || b^2 || c^2 || d^2)
        if(this.isValid === true)
        return Math.pow(this.side[0], 2);
    }

    //Setter methods?
}