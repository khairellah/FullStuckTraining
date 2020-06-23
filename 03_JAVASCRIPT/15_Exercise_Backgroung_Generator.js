// Get the elements
var h3=document.querySelector("h3");
var color1=document.querySelector(".color1");
var color2=document.querySelector(".color2");
var body = document.getElementById("bobyStyle");
// Verify & check our selection
console.log(h3);
console.log(color1);
console.log(color2);




color1.addEventListener("input",ModifyGradient)
color2.addEventListener("input",ModifyGradient)

function ModifyGradient(){
    // check 1 in console 
    console.log(color1.value);
    // check 2 in console 
    console.log(color2.value);
    //changing the linear
    body.style.background="linear-gradient(to right,"+color1.value+","+color2.value+")";
    //get the current value and put it in the h3
    //h3.innerHTML=body.style.background + ";";
    // or
    h3.textContent=body.style.background + ";";
}

/*
We can also ADD the LISTENER in the html file ==> not recommanded !
                    How!!!?
    ex:
    <input    oninput="ModifyGradient()"    .... >
*/