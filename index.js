/*
//Classes:
    Parent Classes:
        Polygon
            Parameters:
                Array of Integers to represent each side of a shape
                    Methods:
                        getter method countSides, count number of sides(each index in Array).
                        getter method perimeter, calculates sum of each side of the polygon
    Child Classes:
        Triangle
            Parameters:
                Inherited from Polygon
                    Methods:
                        Inherited from polygon(countSides, perimeter)
                        getter method isValid that checks if the given 3 sides(a, b, c) for triangle is valid
        Square
            Parameters:
                Inherited from Polygon
                    Methods:
                        Inherited from Polygon(countSides, perimeter)
                        getter method isValid (a === b === c === d)
                        getter method area that calculates area of square*/

class Polygon{
    constructor(side){ //Only parameter is an Array of sides (value is the length).
        this.side = side;
    }
    //Methods:
    get countSides(){ //Number of sides to the shape, or number of indexes in the Array.
        return side.length;
    }
    
    get perimeter(){
        const reducer = (prevVal, currVal) => prevVal + currVal;

        return side.reduce(reducer);
    }
}

class Triangle extends Polygon{
    constructor(...args){
        super(...args)
        this.isValid = false;
    }
    //Assuming there are 3 sides to the shape...
    //Method(s):

    //Sum of lengths of any two sides of triangle greater than length of 3rd side. 
    //If take all sides of triangle and add them in pairs, sum is greater than (not equal to) third side. 
    //If that isn't true, then isn't possible to construct triangle with given lengths.
    get isValid(){ // a + b > c && a + c > b && b + c > a
        return (side[0] + side[1] > side[2] && 
            side[0] + side[2] > side[1] && 
            side[1] + side[2] > side[0]);
    }

    //Setter method?
}

class Square extends Polygon{
    //Assuming there are 4 sides to the shape...
    //Methods:
    get isValid(){
        return (a === b && a === c && a === d); //Boolean for "Are all 4 sides equal?"
        //Another way to check would be comparing area values ()
    }

    get area(){
        //Area of a square = a * b || a * c || a * d || b * c || b * d || c * d
        //Area of a square = Math.pow(side.length, 2); (a^2 || b^2 || c^2 || d^2)
        return this.side[0] = side[0];
    }

    //Setter methods?
}