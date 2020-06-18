// My Database
var database = [
    {
        username : "zakaria",
        password : "123"
        
    },
    {
        username : "adnan",
        password : "345"
        
    },
    {
        username : "khairellah",
        password : "@@@"
        
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

// isValid Function
function isValid(user,pass){
    for(var i=0; i<database.length; i++)
        {
            if(database[i].username === user  && database[i].password === pass)
            {return true;}
        }
    return false;
}


// SingIn Function
function SingIn(user,pass){
    if(isValid(user,pass)) 
            {
                alert("HI : "+user+" !!");
                console.log(newsFeed) ;
            }
    else    {
                alert("Wrong Username Or Password !!");
            }
// if(user === database[0].username && pass === database[0].password)
//     {alert("HI : "+user+" !!");
//     ;console.log(newsFeed) ;}
// else {alert("Wrong Username Or Password !!");}    
 }

SingIn(userprompt,passwordprompt);