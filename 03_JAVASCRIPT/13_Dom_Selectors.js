// DOM Selectors
// --------------
// getElementsByTagName         : Less Powerfull
// getElementsByClassName       : Less Powerfull
// getElementById               : Less Powerfull

// querySelector                : More Powerfull
// querySelectorAll             : More Powerfull

// getAttribute
// setAttribute

// ##Changing Styles
// style.{property} //ok

// className //best
// classList //best

// classList.add
// classList.remove
// classList.toggle

// ##Bonus
// innerHTML //DANGEROUS

// parentElement
// children

// ##It is important to CACHE selectors in

 


/*******************************************************************/ 
                            

                        // EXEPLES

//1 : getElementsByTagName
var h1=document.getElementsByTagName("h1")[0];  /* [0] : because it's an array */ 
console.log("Getting The H1 from the page : ");
console.log(h1);

console.log("-------------------------------------------");

//2 : getElementsByClassName
var pClass=document.getElementsByClassName("second")[0]; /* [0] : because it's an array */  
console.log("Getting The Second paragraph with the classe 'second' from the page : ");
console.log(pClass);

console.log("-------------------------------------------");

//3 : getElementById
var pId=document.getElementById("first");
console.log("Getting The Second paragraph with the Id 'first' from the page : ");
console.log(pId);

console.log("-------------------------------------------");





/*******************************************************************/ 





//4.1 :  querySelector : comme les selectors de css
var liFirst = document.querySelector("li"); // it selects only the first one !! if we wanna select all --> querySelectorAll(li)
console.log("Getting the first li using 'querySelector' :  ");
console.log(liFirst);


console.log("-------------------------------------------");


//4.2 :  querySelectorAll : comme les selectors de css
var liAll = document.querySelectorAll("li"); // it selects AL li
var liAndH1 = document.querySelectorAll("li,h1"); // it selects AL li
console.log("Getting ALL li using 'querySelectorAll' :  ");
console.log(liAll);

console.log("Getting ALL li and H1 using 'querySelectorAll(li,h1)' :  ");
console.log(liAndH1);

console.log("-------------------------------------------");








/*******************************************************************/ 







//5 getAttribute() : get a value for a attribute
var liAttribute = document.querySelector("li").getAttribute("random");
console.log("The value of the attribute 'random' using getAttribute(random)  is :  ",liAttribute);

    // Modify the Attribute : setAttribute()
document.querySelector("li").setAttribute("random","50");   
var liAttribute_Updated = document.querySelector("li").getAttribute("random");
console.log("The New value of the attribute 'random' using setAttribute(random,50)  is :  ",liAttribute_Updated);








/*******************************************************************/ 




console.log("-------------------------------------------");

//6 style.{property} : changing//adding style --> not recomanded : separation of HTML and CSS
//ex : 
console.log("using style.{property} to apply a css in the page --> not recomanded !! ")
document.querySelector("h1").style.background = "yellow";

//7.1 className //best : getting or setting a classe to a html element
var h1plus=document.querySelector("h1");
h1plus.className = "done";//h1plus.className = "coolTitle";


//7.2 classList //best : getting or adding a list of classe to a html element
var liplus=document.querySelector("li");
liplus.classList.add("done");


// classList.add        : to add a classe                   : liplus.classList.add("done");
// classList.remove     : to remove a classe                : liplus.classList.remove("done");
// classList.toggle     : to activate/desactivate a classe  : liplus.classList.toggle("done");


console.log("-------------------------------------------");

/*******************************************************************/ 






//8 innerHTML //DANGEROUS  : to write 
document.querySelector("h1").innerHTML="Shopping List Upadted using innerHTML";

//9 parentElement : get the parent element of a selector
var parentOfLi = document.querySelectorAll("li")[1].parentElement;
console.log("the parent of the 2nd Li is : ",parentOfLi);


// the parent of the parent
parentOfLi = document.querySelectorAll("li")[1].parentElement.parentElement;
console.log("the parent of Ul parent of the 2nd Li is : ",parentOfLi);


//10 children : get the children of a selector (element)
var childrenOfBody = document.querySelectorAll("li")[1].parentElement.parentElement.children;
console.log("the children of parent (body) are : ");
console.log(childrenOfBody);


                                /* Note  */
  // ist is important to cach selectors in 'variables' to avoid using a lot of memory                     