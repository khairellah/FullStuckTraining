const fruits = ["appeles","oranges","bananas"];

// 1 : 'For' loop
for(let i =0; i<fruits.length; i++){
    console.log(fruits[i]);
}

// 2 : 'ForEach' loop
fruits.forEach(item => {
    console.log(item);
})

/*******************************************************/
                        //NEW

// 3 : 'For off' loop : Combining 1&2 new in ES6 
// working with arrays

// "Iteration" in Arrays  & Strings
// A : array    
for (item of fruits){
    console.log(item);
}

// B : String
for (letter of "KHAIRELLAH"){
    console.log(letter);
}
// result : K,H,A,I,R,E,L,L,A,H


// 4 : 'For in' loop : like for off but it works with Object
// working with Objects to see there properties

//"Enumerating"

const objFruits = {
    appeles : 10,
    oranges : 20,
    bananas : 03
}

for (fruit in objFruits){
    console.log(fruit);
}