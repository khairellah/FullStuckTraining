/* Function (arguments){}  */
// exemples :
// * alert : is a function
// * prompt : is a function
// * alert("hi","zakara") : is calling of the function

// create a function
function sayWelcome()
            {console.log("welcome Zakaria");}

//Anonymous Fucntion
var sayBy = function ()
            {console.log("byby");}

// with Arguments
function sum(a,b)
            {console.log("Sum is "+ (a+b));}
// Return
function multiply (a,b){return a*b;}

// Calling ther function to appear in the html page
sayWelcome();
sayBy();
sum(3,4);
/*In The Console directly --> */multiply(3,4); 
alert(multiply(3,4));
console.log("3*2 is : "+multiply(3,2));

// Parameters : Parameter inside the Function Script
// Arguments : Arguments when calling a function --> the values



// EXERCICE of Functions
function checkDriverAge(age){
    if (Number(age) < 18) {
       // alert("Sorry, you are too yound to drive this car. Powering off");
       return "Sorry, you are too yound to drive this car. Powering off";
    } else if (Number(age) > 18) {
        //alert("Powering On. Enjoy the ride!");
        return "Powering On. Enjoy the ride!";
    } else if (Number(age) === 18) {
        //alert("Congratulations on your first year of driving. Enjoy the ride!");
        return "Congratulations on your first year of driving. Enjoy the ride!";
    }  
}

checkDriverAge(19); /*--> in the console directly */