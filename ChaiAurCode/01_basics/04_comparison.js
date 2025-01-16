// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 == 1);
// console.log(2 != 1);


// console.log("2" > 1); //"2" is converted to integer 2
// console.log("02" > 1);

/*
// console.log(null > 0); // false
// console.log(null == 0); // false
// console.log(null >= 0); // true

// console.log(undefined == 0);
// console.log(undefined < 0);
// console.log(undefined > 0);

in operation ko avoid kre.
*/

// ===
console.log("2" === 2);


// The reason is that an equality check ==
//and comparisons ><>= <= work differently.
// Comparison convert null to a number,
// treating it as 0.
//That's why (3) null >= 0 is true and
//(1) null > 0 is false
