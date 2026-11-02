// let value;

// value = 10;
// console.log(value);

// let value2;

// value = a;
// console.log(value2);

// let value3;

// value3 = 2.3;
// console.log(value3);

// let value4;

// value4 = 222222.2222222;
// console.log(value4);

// let value5;

// // value5 = 10;
// // console.log(value);


let number = 10;
if (number%2 ==0)
{
    console.log(number , "is even");
}
else
{
    console.log(number , "is odd");
}


for(let i=0; i<10; i++)
{
    if(i%3==0)
    {
        console.log(i, "is divisible by 3");
    }
    else if(i%5==0)
    {
        console.log(i, "is divisible by 5");
    }
    else if(i%3==0 && i%5==0)
    {
        console.log(i, "is divisible by both 3 and 5");
    }
}

let arr = [1,2,3,4,5];
arr.push(11);
for(let i=0; i<arr.length; i++)
{
    console.log("index" , i , arr[i]);
    
}
console.log(arr.length);

arr.pop(11);
for(let i=0; i<arr.length; i++)
{
    console.log("index" , i , arr[i]);
    
}
console.log(arr.length);

arr.unshift(25);
for(let i=0; i<arr.length; i++)
{
    console.log("index" , i , arr[i]);
    
}
console.log(arr.length);

let a;
console.log("a is " , a);
a=10;

console.log("a is " , a);

console.log("number division" , 5/2);

let str = "double quote string";
let str1 = 'double quote string';

console.log("str" , str);
console.log("str1" , str1);

let arr=[1,2,3,4,5];

console.log("2 element" , arr[1]);
console.log("6th element" , arr[5] );
let value =null;
console.log("value is " , value);



