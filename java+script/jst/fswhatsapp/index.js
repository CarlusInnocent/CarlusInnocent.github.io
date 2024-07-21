//Write a function triangleType(a, b, c) that takes three numbers a, b, and c (representing the lengths of the sides of a triangle) and returns a string indicating the type of triangle:
const triangleType = (a, b, c) => {
    if (a + b <= c || a + c <= b || b + c <= a){
        console.log("Not a triangle");
    } else
    {
        if (a === b || b === c)
        {
            console.log("E");
        }
        else if (a !== b || b !== c || c !== a) 
        {
            console.log("S");
        }
        else {
            console.log("I")
        }
    }
}
console.log(triangleType(6, 5, 6));
//"Equilateral" if all three sides are equal.
//"Isosceles" if exactly two sides are equal.
//"Scalene" if all three sides are different lengths.
//"Not a triangle" if the given lengths cannot form a valid triangle.