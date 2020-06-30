// 1 : Primitive Type are Passing BY VALUE
// 2 : Objects Are Passing BY REFERENCE

// Ex 1 : Passe by Value

var a = 5;
var b = a; // --> b=5  copy the value not the reference and put it in a new memory
b++;
console.log(a); // --> 5
console.log(B); // --> 6  not the same --> Pass by Value


// Ex 2 : Passe by Reference

let obj1 = {user:'adnan',password:'123'};
let obj2 = {user:'adnan',password:'123'};

obj1 === obj2 // --> False

// obj1 and obj2 have the same values but they are not the same
let obj3 = {user:'zakaria',password:'3868'};
let obj4 = obj3;

obj3 === obj4 // True : they have the same Reference

// for checking

obj3.password = '0000'; // changing the pwd in just the obj3 but it will change too n obj4 because they have the same reference
obj3 === obj4 // True : they have the same Reference --> changing pwd in both objects
console.log(obj3);
console.log(obj4); // same values & same reference


/* Clone an array (object)  and adding without affecting the original one*/

var c=[1,2,3,4,5];
var d=c; // --> the same reference if we modify one of them it will modify the second too

// clone the C to add Something without affecting the original one 'C'
var cloneC=[].concat(c);
cloneC.push(10); // add value 10 at the end

console.log(c);         // [1, 2, 3, 4, 5]
console.log(cloneC);    // [1, 2, 3, 4, 5, 10]


/* A : SOFT Clone an  object and Modifying without affecting the original one*/

// soft clone work only if our object has inside primitive type only because if he has some object inside it will pass by reference and not clonning them and that's wrong cause we wanna clone the whole object !! --> solution 'DEEP CLONE'  look at part 'B' after

//1 :  using  Object.assign(target,source);
var objAdnan={name:'adnan',age:27};
var cloneObjAdnan = Object.assign({}, objAdnan);

// check
objAdnan===cloneObjAdnan // --> False
//Modify cloneObjAdnan
cloneObjAdnan.name='zakaria';
//check
console.log(objAdnan);       // {name: "adnan", age: 27}
console.log(cloneObjAdnan); //  {name: "zakaria", age: 27}


//2 :  using  {...obj}
var cloneObjAdnan2 =  {...objAdnan};
// check
objAdnan===cloneObjAdnan2 //  --> False



/* B :  DEEP Clone an Object */
// clone all abject including the Object inside him using the 'JSON'

// Ex
let myObj={
    name:'adnan',
    age:27,
    insidObj:{
        a:'a',
        b:'b'
            }
        }
  // using SOFT clone
  let softCloneMyObj = {...myObj};
  // Updating the Original Obj
        // soft
        myObj.name='zakaria'; 
        //Deep  
        myObj.insidObj.b='Updated!!'
  // check
 console.log(myObj);
 console.log(softCloneMyObj); 

 // Result
 /*
 1: soft clone work perfect : even we change name from 'adnan' to 'zakaria' --> in the original myObj we found the old value --> 'adnan'
 2: when we modify  myObj.insidObj.b from 'b' to 'Updated!!' and here we are talking about Object inside object !! it MODIFY THE BOUTH VALUES IN THE TWO OBJECT and that's because Object ARE PASSING BY REFERENCE
 */

// SOLUTION FOR RESULT 2 :  WORKING WITH DEEP CLONE wich works with the OBJECT INSIDE OBJECT TOO

// Using JSON
let SuperDeepCloneMyObj = JSON.parse(JSON.stringify(myObj));
  /* EXPLICATION 
        1 : JSON.stringify(myObj) : Covert all the 'myObj' to String
        2 : JSON.parse()          : Convert that String back to an Object
    */  

// checking Now
console.log(myObj);                 //-->{name:'adnan',age:27,insidObj:{a:'a',b:'Updated!!' }}    
console.log(SuperDeepCloneMyObj);   //-->{name:'adnan',age:27,insidObj:{a:'a',b:'Updated!!' }}    

// Modify The the Inside Object from the originale obj
myObj.insidObj.b='back to Originale!';

// SEE THE RESULT
console.log(myObj);                 //-->{name:'adnan',age:27,insidObj:{a:'a',b:'back to Originale!' }}    
console.log(SuperDeepCloneMyObj);   //-->{name:'adnan',age:27,insidObj:{a:'a',b:'Updated!!' }}  

// CONCLUSION
/*
     Using deep clone work Perfectly when we have some object inside our object that we wanna clone
but if we have a 'HUGE' number of object inside it will take a long time to clone !!!

*/
