// let marks = [97,38,29,94,94,21]
// console.log(marks);
// console.log(marks.length);
// console.log(typeof marks);

// let heroes = ["ironman","hulk","batsman","spiderman","shaktiman","antman","thor"];

// for(let i = 0; i < heroes.length;++i){
//     console.log(heroes[i])
// }

//for-of and for-in loops are valid to print element of array
// for(let el of heroes){
//     console.log(el);
// }

// let cities = ["delhi","gaya","patna","bela"];

// for(let city of cities){
//     // console.log(city);
//     console.log(city.toUpperCase());
// }

//Let's Practice
// let sum = 0;
// let marks = [85, 97, 44, 37, 76, 60];
// for (let val of marks) {
//     sum += val;
// }
// let avg = sum / marks.length
// console.log(`Average Marks is = ${avg}`);

//Let's Practice
// let i = 0;
// let items = [250,645,300,900,50];
// for(let val of items)
// {

//     let offer = val / 10;
//     items[i] = items[i] - offer;
//     console.log(`After applying offer = ${items[i]}`);
//     i++;
// }
//OR
// for(let i = 0; i < items.length; ++i){
//     let offer = items[i] / 10;
//     items[i] = items[i] - offer
// console.log(`Value after discount = ${items[i]}`)
// }
// console.log(items)

//Push function--
// let foodItems = ["potato","tomato","zeera","mango"];
// foodItems.push("sabzi","litchi","sandwich","tigerBiscuit");
// console.log(foodItems);
// let deletedValue = foodItems.pop();
// console.log(deletedValue);


//toString--It doesn't affect the original array
// let foodItems = ["potato","tomato","zeera","mango"];
// console.log(foodItems);
// console.log(foodItems.toString());
// console.log(foodItems);

//Concat:Joins multiple Arrays and return result
// let vehicle = ["car","bike","scooter"];
// let airLines = ["indigo","safari"];
// let hero = ["Shahrukh","salman","tigershroff"];
// let res = vehicle.concat(airLines,hero);
// console.log(res);


//unshift : add to start . Similar to Push function
//shift : delete from start and return.
// let vehicle = ["car","bike","scooter"];
// vehicle.unshift("scooty");
// vehicle.shift();
// console.log(vehicle)


//slice:returns a piece of the array -- orginal array don't change
// let vehicle = ["Lamborghini", "BMW", "Audi", "Indigo", "Auto"];
// let slice = vehicle.slice(1, 3);
// console.log(vehicle.slice(1, 4));
// console.log(vehicle);

//Splice : change original array : splice(startIdx, delCount, newEl..)

// let number = [1,2,3,4,5,6,7];
// let delArray = number.splice(2,2,101,102)
// console.log(number);

//Add Element
// number.splice(2,0,101);
// console.log(number);

//Delete Element
// number.splice(1,1);
// console.log(number);

//Replace Element
// number.splice(3,1,101);
// console.log(number);


// console.log(number.splice(4)); // One arguemnet in splice means us index se last tak delete ho jayega
// console.log(number); // bacha hua array print hoga

// number.splice()   // No changes would be occur
// console.log(number)  

//Let's Practice
let companies = ["Bloomberg","Microsoft", "Uber","Google", "IBM","Netflix"];
// companies.shift();
// console.log(companies.splice(2,1,"ola"));
// companies.push("Amazon");
// console.log(companies);