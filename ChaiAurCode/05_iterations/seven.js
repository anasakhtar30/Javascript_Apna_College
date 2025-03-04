const myNumbers = [1,2,3,4,5,6,7,8,9,10]

//If i want to add 10 in all the elements
// const newNums = myNumbers.map((num)=>  {return num + 10}
// console.log(newNums);


//Chaining...
const newNums = myNumbers
                        .map((num)=> num * 10) //[10,20,30,......]
                        .map((num)=>num + 1) //[11,21,31,.....]
                        .filter((num)=>num >= 40)

console.log(newNums);

