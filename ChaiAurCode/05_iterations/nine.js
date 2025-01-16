const myNums = [1,2,3];

const initialValue = 0;

// const myTotal = myNums.reduce(function(accumulator,currVal){
//     console.log(`accumulator : ${accumulator} and curVal : ${currVal}`);
    
//     return accumulator + currVal
// },0)

const myTotal = myNums.reduce((acc,curr) => acc+curr,0)

console.log(myTotal);


const shoppingCart = [
    {
        itemName :"js Course",
        price:2999
    },
    {
        itemName :"javc Course",
        price:999
    },
    {
        itemName :"Mobile Dev Course",
        price:5999
    },
    {
        itemName :"Data Science Course",
        price:12999
    },
]

const pricetoPay = shoppingCart.reduce((acc,item)=>acc + item.price,0)
console.log(pricetoPay);
