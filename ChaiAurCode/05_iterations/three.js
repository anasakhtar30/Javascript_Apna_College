// for of

// ["","",""]
// [{},{},{}]

const arr = [1,2,3,4,5]

for (const val of arr) {
    // console.log(val);
}

// const greetins = "Hello World!"

// for(const greet of greetins){
//     console.log(`Each char is ${greet}`);
    
// }

//Maps

const map = new Map();
map.set('IN',"India")
map.set('USA',"United State")
map.set('Fr',"France")
// console.log(map)

for(const [key,value] of map){
    console.log(key, ':-',value);
    
}

// const myObject = {
//     'game1' :'NFS',
//     'game2':'Spiderman'
// }

// Aise nhn kr skte hai iterate
// for (const [key,value] of myObject) {
//     console.log(key,':-',value);
    
// }