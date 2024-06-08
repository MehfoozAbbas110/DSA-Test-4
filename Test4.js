// Question 1:Write a JavaScript for loop that iterates from 0 to 20 and prints only the even numbers, but skips the number 10.


for(i=1; i<=20; i++){

    if(i%2===0){
        if(i===10){
           i= i+2;
        }
        
        console.log(i);

    }
  
}

// Question 2:Write a JavaScript while loop that calculates the factorial of a given number and also counts how many iterations were needed.

var num1=6; 
var fact=1
var iter=0
while(num1>0)
    {
        fact=fact*num1;
        num1--;
           iter++
    }
    console.log(`Factorial of given no is ${fact} and Iteration is ${iter}`);

// Question 3:Create a JavaScript function that takes an array of numbers as input and returns the sum of all the even numbers using a for loop.

const array1=[2,12,13,19,87,98,43,54];
var sum=0;
function sum1(array1){
for(i=0; i<=array1.length-1; i++){

    // console.log(array1[i]);

    if(array1[i]%2===0){

         sum= sum+ array1[i];
         
    }
}
console.log(sum);

}

sum1(array1);

// Question 4:Write a JavaScript program that generates the first n numbers in the Fibonacci sequence, using a while loop, and stores them in an array.

var num1=0;
var num2=1;
var fibo;
var result=[];
while(num1<10){

    result.push(num1);  // [0], [0,1], [0,1,1], [0,1,1,2],[0,1,1,2,3], [0,1,1,2,3,5], [0,1,1,2,3,5,8]
    // console.log(result);
    fibo=num1+num2;   // fibo=0+1=1, 1+1=2, 1+2=3, 2+3=5
    num1=num2;        // num1= 1, 1, 2, 3
    num2= fibo;       //num2=1, 2, 3, 5
}

console.log(result);


// Question 5:Create a JavaScript function that takes an array of strings as input and returns a new array with only the strings that have a length greater than 7 characters.

const string=["Mehfooz", "Abbas","Hasni", "Ibrahim", "Ali"];
 var result=[];
function length(string){

    for(i=0; i<=string.length-1; i++){

        // console.log(string[i].length);
        if(string[i].length>7){
            result.push(string[i]);

        }
    }
    console.log(result);
}

length(string);

// Question 6:Write a JavaScript function that takes a number as input and returns true if it is a prime number, otherwise false. Additionally, the function should also print all the factors of the number.

var num=22;

function prime(num){

    if(num===2 || num===3 || num===5 || num===7){

        console.log(`${num} is Prime no`)
    }

    if(num%2==0 || num%3==0 || num%5==0 || num%7==0){

        console.log(`${num} is not a Prime no`)
    }
    else(
        console.log(`${num} is Prime no`)
    )
}

prime(num);




// Question 7:Create a JavaScript program that calculates the sum of all numbers from 1 to 1000 that are divisible by 3, 5, or 7.

var sum=0;
for(i=1; i<=1000;i++){

    if(i%3===0 && i%5===0 && i%7===0){
        // console.log(i)
         sum= sum+ i;
    }
    
}

console.log(sum);

// Question 8:Write a JavaScript function that takes a string as input and returns the reverse of the string without using a built-in reverse method, using a for loop.

var string1= "Mehfooz";
var outpurstr=""

function reverse(str){

    for(i=str.length-1; i>=0; i--)
        {
            // console.log(str[i]);
            outpurstr= outpurstr+str[i]

        }

        console.log(outpurstr);
}

reverse(string1);


//Question 10:Write a JavaScript function that takes an array of numbers as input and returns the maximum difference between any two consecutive numbers in the array

var array2=[5,10,22,80,98,8,90,2];
var maxdiff=0;
var diff;
function Maxdiff(array2){

    for(var i=0; i<=array2.length-1; i++){

        // console.log(array2[i]);
        diff=Math.abs(array2[i]-array2[i+1]);
        // console.log(array2[i], array2[i+1], diff)
        if(maxdiff<diff)
            {
                maxdiff= diff;
            }
    }
    console.log(`Max difference for given array is ${maxdiff}`)
}

Maxdiff(array2);