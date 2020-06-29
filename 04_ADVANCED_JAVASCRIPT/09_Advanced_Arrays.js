/*  Map     Filter      Reduce  */

const array = [1,2,3,4,5];

// Map


/* Multiply each row by 2 */
const mapArray = array.map((num) => {return num*2;});
// new  : const mapArray = array.map((num) => num*2);
// Or new if one parameter  : const mapArray = array.map(num => num*2);
console.log(mapArray);



// Filter 

/* get all number that >=3 --> condition */

const filterArray = array.filter(num => {return num >= 3;});
// Or new const filterArray = array.filter(num => num >= 3);

// Reduce

/* Ex get the sum of thr array */
const reduceArray2 = array.reduce((accumulator,num)=>{
    return accumulator + num;
},0); 
/* 0 is the value to start with in the accumulator --> for sum we use 0 */