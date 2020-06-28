/* Javascript was created y the NETSCAPE Browser and the other browssers start using js  */
/* ECMA international : standar js everybody use this version of JS */
// ES6 = EcmaScript Version 6
// progamers create a website called BABEL : is a javascripte compiler to start using the new js features without waiting the browser to implement this new features


/***********************    New Features    *********************/
// let & Const : new way to declare variables old way : var


let name="adnan"; /*new way of var */

const p=3.14; /* Constant we can't change it after*/
// if after : p=2.12 --> error  :VM94:1 Uncaught TypeError: Assignment to constant variable.
// a function can be const because it will not change after
// also :  if we have a const obj we can't resignt it be we can modify a property
    // ex
  const obj1 ={
      name:"Adnan",
      age:26
  }  

  // obj = 5 --> erorr : VM131:1 Uncaught TypeError: Assignment to constant variable.
  // but if we change a property it's Ook
  obj.age=27; /* it will change from 26 to 27 */

/********************************************************************/
// Destructuring

const obj2 ={
    name:"Zakaria",
    age:27
}

let name2=obj2.name;
let age2=obj2.age;
console.log(name2);
console.log(age2);

// using Destrctoin
let{name,age} = obj2;
console.log(name);
console.log(age);


/********************************************************************/ 
// New way of declaring obj properties --> Dynamique
let last_name="khairellah";
const obj3 ={
    [last_name] : "khairellah2",
    ["adnan" + "zakaria"] : "Full name",
    [3+12] : 15
}

console.log(obj3); 
/*
    {   15: 15, 
        khairellah: "khairellah2", 
        adnanzakaria: "Full name"}
*/     

// Remove The declaration if it the same as  the value
//Ex
const a ="blabla";
const b= "bla bla";

const obj_blabla={
    a:a,
    b,b
}
// --> New
const obj_bla_new={a,b};

/********************************************************************/

// Template Strings >> concat

const msg="hello "+last_name+" your age is "+age+" and you age last year was "+(age-1)+" have a good day!";
const msg_new =`hello ${last_name} your age now is ${age} and you age age last year was ${age-1} have a good day!`;

/********************************************************************/
//Default arguments
function info(last_name="khairellah adnan",age=26){
return"hello "+last_name+" your age is "+age+" and you age last year was "+(age-1)+" have a good day!";
}
// call the function with the default arguments
    info(); //-->"hello khairellah adnan your age is 26 and you age last year was 25 have a good day!"
// Call the function with new arguments
    info("zakaria",12); // --> "hello zakaria your age is 12 and you age last year was 11 have a good day!"


/********************************************************************/
// Symbol --> type
let symb1=Symbol();
let symb2=Symbol('hi');
let symb3=Symbol('hi');

symb2===symb3  // --> false 


/********************************************************************/

// Arrow Function
// Old Version
    function add(a,b){return a+b;}
// New Version ES6 new syntaxe
    const add2 = (a,b) => a+b;
