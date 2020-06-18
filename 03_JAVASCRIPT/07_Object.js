var user = {
        name : "zakaria",
        age : 27,
        hobby : "music",
        isMarried : true
};


console.log("User Details are : ");
console.log(user);

console.log("The name of the user is : "+user.name);

// add properties to object
user.lastname = "KHAIRELLAH";
console.log("Last name added : "+user.lastname);

//changing value of a propertie
user.age=26;
console.log("Age modify from 27 to : "+user.age);

// List inside Object
var userWithList = {
        name : "zakaria",
        age : 27,
        hobby : "music",
        isMarried : true,
        colors :["red","blue","green"]
};

// Get A color "Green" from The Object
console.log("list Color from the object : '"+ userWithList.colors[2]+"'");


// List of Objects
var lisObject =[
        {
        username:"shadow",
        password:"azerty"
        },
        {
        username:"adnan",
        password:"123"
        }
];

// getting the password 1
console.log("Pasword of user 1 : "+lisObject[0].password);

//Function Inside Object (Function Inside Object = Method) 
var userFunction = {
        name:"zakaria",
        lastename:"khairellah",
        info_user:function(){
                return "Welcome : "+this.name+" - "+this.lastename;
        }
};

// Create an Empty Object
var emptyUser={};
        //Add
        emptyUser.username="zakaria";
        console.log(emptyUser.username);
// Create an Empty List
var emptyList=[];
        //Add
        emptyList[0]="hi";
        console.log(emptyList[0]);

// Create a Null Object
var nullObject = null;
// --> a can't set a propertie later on !!
// Exemple :  nullObject.age=23; --> Uncaught TypeError: Cannot set property 'age' of null