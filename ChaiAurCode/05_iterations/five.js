const coding = ["js","rb","java","py","C++"]

// coding.forEach(function(item){
//     console.log(item);
// })

// coding.forEach((el)=>{
//     console.log(el);
    
// })

// function printMe(item){
//     console.log(item);
    
// }

// coding.forEach(printMe())

// coding.forEach((item,index,arr)=>{
//     console.log(item,index,arr);
    
// })

const myCoding = [
    {
        languageName:"javascript",
        languageFileName:"js"
    },
    {
        languageName:"java",
        languageFileName:"java"
    },
    {
        languageName:"python",
        languageFileName:"py"
    },
]

myCoding.forEach((item)=>{
    console.log(item.languageFileName);
})