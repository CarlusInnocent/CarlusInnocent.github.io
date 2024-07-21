//1. Print numbers from 1 to 10.
//2. Print numbers from 10 to 1.
//3. Print even numbers from 2 to 20.
/*4. Print odd numbers from 1 to 19.
5. Calculate the sum of numbers from 1 to 100.
6. Calculate the sum of even numbers from 1 to 100.
7. Calculate the sum of odd numbers from 1 to 100.
8. Print the multiplication table of 5.
9. Print the multiplication tables from 1 to 10.
10. Calculate the factorial of 5.
*/

//11. Print the first 10 Fibonacci numbers.



//12. Print the squares of numbers from 1 to 10.
for (i = 1; i <= 10; i++)
{
    console.log(i * i);
}
console.clear();
//13. Print the cubes of numbers from 1 to 10.
for (i = 1; i <= 10; i++)
    {
        console.log(i * i * i);
    }
console.clear();

//14. Print numbers from 1 to 100 that are divisible by 3.
for (i = 1; i <= 100; i++)
    {
        if ((i % 3) === 0)
        {
            console.log(i);
        }
        
    }
console.clear();

//15. Print numbers from 1 to 100 that are divisible by 5.
for (i = 1; i <= 100; i++)
    {
        if ((i % 5) === 0)
        {
            console.log(i);
        }
        
    }
console.clear();

//16. Print numbers from 1 to 100 that are divisible by both 3 and 5.
for (i = 1; i <= 100; i++)
    {
        if ((i % 3) === 0 && (i % 5) === 0)
        {
            console.log(i);
        }
        
    }
console.clear();

//17. Print numbers from 1 to 100 that are not divisible by 3.
for (i = 1; i <= 100; i++)
    {
        if ((i % 3) !== 0)
        {
            console.log(i);
        }
        
    }
console.clear();

/*18. Print the first 10 prime numbers.
for (i = 1; i <= 10; i++)
    {
        if 
        
    }

*/

//19. Calculate the sum of the first 10 prime numbers.

console.clear();

//20. Print the reverse of a given number.
/*
let number = 12345;
let text = number.toString();
let stringLength = text.length;
let positionControl = 1;

for (i = stringLength; i >= 0; i--)
{
    let position = stringLength - positionControl;
    console.log(text[position]);
    positionControl += 1;
}
*/
/*
//21. Print the digits of a number.
let number = 12345;
let text = number.toString();
let stringLength = text.length;
let position = 0;

for (i = 0; i < stringLength; i++)
{
    console.log(text[position]);
    position += 1;
}
*/


//22. Calculate the sum of the digits of a number.


/*
23. Count the number of digits in a number.
24. Reverse an array.
*/

/* //25. Find the maximum number in an array.
console.clear();
//have an array
let numbers = [30,2,3,99,5,6,7];

//variable containing our maximum v
let maxVal = numbers[0];

//do a l search
function findMax(array)
{
    for (i = 1; i <= array.length; i++)
    {
        if (array[i] > maxVal)
        {
            maxVal = array[i];
        }
    }

    return maxVal;
}

console.log(findMax(numbers));

*/
console.clear();

//26. Find the minimum number in an array.
let number = [3, 4, 1, 88, 7];
let minVal = number[0];

function findMin(array)
{
    for (i = 1; i <= array.length; i++)   
    {
        if (array[i] < minVal)
        {
            minVal = array[i];
        }
    }

  return minVal;
}

console.log(findMin(number));


console.clear();

//27. Calculate the average of numbers in an array.

/*
let x = [1, 2, 3, 4, 5];
let sum = 0;
let average = calcuateAverage(x);

function calcuateAverage(array) {
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }
  return sum;
}
console.log(average);
*/

/*let nums = [1, 2, 3, 4, 5];
let sum = 0;
let average = calcuateAverage(nums);

function calcuateAverage(array) {
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }
  return sum;
}
console.log(average);
*/




console,clear();
//28. Count the occurrences of a specific number in an array.
let numArray = [1,2,3,4,2,3,3];




/*29. Count the number of even numbers in an array.
30. Count the number of odd numbers in an array.
31. Print the index of a specific number in an array.
32. Print the index of the maximum number in an array.
33. Print the index of the minimum number in an array.
34. Print all elements of a 2D array.
35. Calculate the sum of all elements in a 2D array.
36. Calculate the sum of the diagonal elements in a 2D array.
37. Print the transpose of a 2D array.
38. Flatten a 2D array into a 1D array.
39. Sort an array in ascending order.
40. Sort an array in descending order.
41. Merge two arrays.
42. Find the common elements in two arrays.
43. Find the unique elements in an array.
44. Remove duplicate elements from an array.
45. Shift elements of an array to the left.
46. Shift elements of an array to the right.
47. Rotate an array to the left.
48. Rotate an array to the right.
49. Print the Fibonacci sequence up to 100.
50. Print the prime numbers up to 100.
51. Print the first 100 natural numbers.
52. Print the first 100 whole numbers.
53. Print the first 100 positive integers.
54. Print the first 100 negative integers.
55. Calculate the sum of the first 100 natural numbers.
56. Calculate the sum of the first 100 whole numbers.
57. Calculate the sum of the first 100 positive integers.
58. Calculate the sum of the first 100 negative integers.
59. Print the first 100 even numbers.
60. Print the first 100 odd numbers.
61. Calculate the sum of the first 100 even numbers.
62. Calculate the sum of the first 100 odd numbers.
63. Print the square of the first 100 natural numbers.
64. Print the cube of the first 100 natural numbers.
65. Print the factorial of the first 10 numbers.
66. Print the first 10 perfect squares.
67. Print the first 10 perfect cubes.
68. Print the sum of the first 10 perfect squares.
69. Print the sum of the first 10 perfect cubes.
70. Find the GCD (Greatest Common Divisor) of two numbers.
71. Find the LCM (Least Common Multiple) of two numbers.
72. Check if a number is prime.
73. Print all prime numbers between two numbers.
74. Find the sum of prime numbers between two numbers.
75. Count the number of prime numbers between two numbers.
76. Check if a number is a palindrome.
77. Print all palindrome numbers between two numbers.
78. Find the sum of palindrome numbers between two numbers.
79. Count the number of palindrome numbers between two numbers.
80. Check if a number is an Armstrong number.
81. Print all Armstrong numbers between two numbers.
82. Find the sum of Armstrong numbers between two numbers.
83. Count the number of Armstrong numbers between two numbers.
84. Check if a number is a perfect number.
85. Print all perfect numbers between two numbers.
86. Find the sum of perfect numbers between two numbers.
87. Count the number of perfect numbers between two numbers.
88. Find the sum of the digits of an array of numbers.
89. Find the product of the digits of an array of numbers.
90. Find the difference between the largest and smallest numbers in an array.
91. Find the sum of the largest and smallest numbers in an array.
92. Find the average of the largest and smallest numbers in an array.
93. Find the median of an array.
94. Find the mode of an array.
95. Print a right-angled triangle pattern with numbers.
96. Print a right-angled triangle pattern with stars.
97. Print a pyramid pattern with numbers.
98. Print a pyramid pattern with stars.
99. Print an inverted right-angled triangle pattern with numbers.
100. Print an inverted right-angled triangle pattern with stars.1. Print numbers from 1 to 10.
2. Print numbers from 10 to 1.
3. Print even numbers from 2 to 20.
4. Print odd numbers from 1 to 19.
5. Calculate the sum of numbers from 1 to 100.
6. Calculate the sum of even numbers from 1 to 100.
7. Calculate the sum of odd numbers from 1 to 100.
8. Print the multiplication table of 5.
9. Print the multiplication tables from 1 to 10.
10. Calculate the factorial of 5.
11. Print the first 10 Fibonacci numbers.
12. Print the squares of numbers from 1 to 10.
13. Print the cubes of numbers from 1 to 10.
14. Print numbers from 1 to 100 that are divisible by 3.
15. Print numbers from 1 to 100 that are divisible by 5.
16. Print numbers from 1 to 100 that are divisible by both 3 and 5.
17. Print numbers from 1 to 100 that are not divisible by 3.
18. Print the first 10 prime numbers.
19. Calculate the sum of the first 10 prime numbers.
20. Print the reverse of a given number.
21. Print the digits of a number.
22. Calculate the sum of the digits of a number.
23. Count the number of digits in a number.
24. Reverse an array.
25. Find the maximum number in an array.
26. Find the minimum number in an array.
27. Calculate the average of numbers in an array.
28. Count the occurrences of a specific number in an array.
29. Count the number of even numbers in an array.
30. Count the number of odd numbers in an array.
31. Print the index of a specific number in an array.
32. Print the index of the maximum number in an array.
33. Print the index of the minimum number in an array.
34. Print all elements of a 2D array.
35. Calculate the sum of all elements in a 2D array.
36. Calculate the sum of the diagonal elements in a 2D array.
37. Print the transpose of a 2D array.
38. Flatten a 2D array into a 1D array.
39. Sort an array in ascending order.
40. Sort an array in descending order.
41. Merge two arrays.
42. Find the common elements in two arrays.
43. Find the unique elements in an array.
44. Remove duplicate elements from an array.
45. Shift elements of an array to the left.
46. Shift elements of an array to the right.
47. Rotate an array to the left.
48. Rotate an array to the right.
49. Print the Fibonacci sequence up to 100.
50. Print the prime numbers up to 100.
51. Print the first 100 natural numbers.
52. Print the first 100 whole numbers.
53. Print the first 100 positive integers.
54. Print the first 100 negative integers.
55. Calculate the sum of the first 100 natural numbers.
56. Calculate the sum of the first 100 whole numbers.
57. Calculate the sum of the first 100 positive integers.
58. Calculate the sum of the first 100 negative integers.
59. Print the first 100 even numbers.
60. Print the first 100 odd numbers.
61. Calculate the sum of the first 100 even numbers.
62. Calculate the sum of the first 100 odd numbers.
63. Print the square of the first 100 natural numbers.
64. Print the cube of the first 100 natural numbers.
65. Print the factorial of the first 10 numbers.
66. Print the first 10 perfect squares.
67. Print the first 10 perfect cubes.
68. Print the sum of the first 10 perfect squares.
69. Print the sum of the first 10 perfect cubes.
70. Find the GCD (Greatest Common Divisor) of two numbers.
71. Find the LCM (Least Common Multiple) of two numbers.
72. Check if a number is prime.
73. Print all prime numbers between two numbers.
74. Find the sum of prime numbers between two numbers.
75. Count the number of prime numbers between two numbers.
76. Check if a number is a palindrome.
77. Print all palindrome numbers between two numbers.
78. Find the sum of palindrome numbers between two numbers.
79. Count the number of palindrome numbers between two numbers.
80. Check if a number is an Armstrong number.
81. Print all Armstrong numbers between two numbers.
82. Find the sum of Armstrong numbers between two numbers.
83. Count the number of Armstrong numbers between two numbers.
84. Check if a number is a perfect number.
85. Print all perfect numbers between two numbers.
86. Find the sum of perfect numbers between two numbers.
87. Count the number of perfect numbers between two numbers.
88. Find the sum of the digits of an array of numbers.
89. Find the product of the digits of an array of numbers.
90. Find the difference between the largest and smallest numbers in an array.
91. Find the sum of the largest and smallest numbers in an array.
92. Find the average of the largest and smallest numbers in an array.
93. Find the median of an array.
94. Find the mode of an array.
95. Print a right-angled triangle pattern with numbers.
96. Print a right-angled triangle pattern with stars.
97. Print a pyramid pattern with numbers.
98. Print a pyramid pattern with stars.
99. Print an inverted right-angled triangle pattern with numbers.
100. Print an inverted right-angled triangle pattern with stars.
*/