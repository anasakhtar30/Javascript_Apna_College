//const coding = ["js","ruby","java","python","cpp"]

//forEach kch return nhn krta hai.
// const values = coding.forEach((item)=>{
//     // console.log(item);
//     return item
// })

// console.log(values);

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//ye filter value ko return krta hai hai but forEach nhn krta hai .
// const newNums = myNums.filter((num)=>num > 4)
// const newNums = myNums.filter((num)=>{
//     return num > 4 // scope open krte hai to return krna padega.
// })

// const newNums = []
// myNums.forEach((num)=>{
//     if(num > 4){
//         newNums.push(num)
//     }
// })

// console.log(newNums);

const books = [
  { title: "Book One", genre: "Fiction", publish: 1981, edition: 2004 },
  {title :'Book Two',genre :'Non-Fiction',publish :1992, edition:2008},
  {title :'Book Three',genre :'History',publish :1998, edition:2010},
  {title :'Book Four',genre :'Geo',publish :1892, edition:2001},
  {title :'Book Five',genre :'History',publish :1888, edition:1999},
  {title :'Book Six',genre :'Fiction',publish :1872, edition:2011},
];

let userBooks = books.filter((bk)=> bk.genre === 'History')
userBooks = books.filter((bk) => {
    return bk.publish >= 1900 && bk.genre ==='History'
})
console.log(userBooks);

