// select the button
var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul=document.querySelector("ul");

// My Main Function To Add in the UL
function add(){
    if(input.value.length == 0 )
        {alert("Empty Value would you please write something !");}
    else{    
    console.log(input.value);
    //Create the element
    var li = document.createElement("li");
    // add the input to li
    li.appendChild(document.createTextNode(input.value));
    // attach li to our ul
    ul.appendChild(li);
    // Clear the input
    input.value = "";
}
}

//If Click On Button
button.addEventListener("click", add)

//If Press The Entree Key
input.addEventListener("keypress",function(event){
    //console.log(event.keyCode);
    if(event.keyCode == 13 ){
        add();
    }
})