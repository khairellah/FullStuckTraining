// My Database
var database = [
    {
        username : "zakaria",
        password : "123"
    }
];

// My News
var newsFeed = [
    {
        username : "jackson",
        timeline : "i like this city"
    },
    {
    
        username : "steve",
        timeline : "i'm trying to learn js as fast as ossible !"
    }
];


// For SingIn

var userprompt = prompt("What's your Username ?");
var passwordprompt = prompt("What's your Password ?");

// SingIn Function
function SingIn(user,pass){
if(user === database[0].username && pass === database[0].password)
    {alert("HI : "+user+" !!");
    ;console.log(newsFeed) ;}
else {alert("Wrong Username Or Password !!");}    
}

SingIn(userprompt,passwordprompt);