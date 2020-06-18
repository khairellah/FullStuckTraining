var todos = [
    "Complete the 4th Year",
    "Start the 5th Year",
    "Validate all the Moduls",
    "Get My Engineering degree",
    "Get More Experience",
    "Changing the Job",
    "Get at least 1 year of experience",
    "Immegration precess !"
];



// FOR LOOP
console.log("Using FOR : My Todos List is :");
console.log("---------------------------");

for(var i=0; i<todos.length; i++){
    todos[i]=todos[i]+" Inchaallah"
    console.log(todos[i]);
}

console.log("---------------------------");







// WHILE LOOP
console.log("Using WHILE : My Todos List is :");
console.log("---------------------------");


var counter=0;
while(counter<todos.length){
    console.log(todos[counter]); 
    counter++; 
}

console.log("---------------------------");



// WHILE LOOP
console.log("Using DO WHILE : My Todos List is :");
console.log("---------------------------");

var counter2=0;
do{
    console.log(todos[counter2]); 
    counter2++;
}while(counter2<todos.length)

console.log("---------------------------");



// forEach LOOP (new in ECMAScript 5)
console.log("Using forEach : My Todos List is :")
console.log("---------------------------");

todos.forEach(function(i)
            {console.log(i);
            })

console.log("---------------------------");