var animals = ["tiger","cat","bear","bird"];

var numbers = [1,2,3,4,5];

var booleans = [true,false];

var functionList = [function appel(){console.console.log("appel");}]

//Mixed : Not Advised!!
var mixListe = ["appel" , 3 , true,function appel(){console.console.log("appel");}]

//call
console.log(animals[0]);

// Array of array --> 2 Dimensions
var animals2 = [["tiger","cat","bear","bird"]];
// how to get cat ?
console.log(animals2[0][1]);
// 0 : First array
// 1 : position in the 0 Array


// Array Methods
    //Array exemple
    var list = ["tiger","cat","bear","bird"];

//1 : list.shift(); 
        /* 1 : list.shift(); :  Remove the fist element --> Result : list = [cat","bear","bird"] ==> Remove "tiger" element*/  

//2 : list.pop();
        /* 2 : list.pop(); :  Remove the Last element --> Result : list = [cat","bear"] ==> Remove "bird" element*/  

//3 : list.push("elephant");
        /* 3 : list.push("elephant"); : Add the "elephant" element into the list (at the end) --> Result : list = [cat","bear","elephant"] ==> adding the "elephant" element */

//4 : list = list.concat(["bee","deer"]);  ==> !! : list.concat() creates a new list !!
        /* 4 : concat or adding "bee","deer" in the previous list --> result ==> list = ["cat", "bear", "elephant", "bee", "deer"] */       

//5 : list.indexOf("bee");
        /* 5 : list.indexOf("bee"); : Retune the index OR the positin of the elemenet "bee" on the list result ==> 3 */
        // If returns -1 then that element is not existe on the list !!       

//6 : liste.sort();
        /* sort the list Or Tri --> result ==> liste = ["bear", "bee", "cat", "deer", "elephant"]*/        
//6. Sort the array in reverse order : array.reverse();
 // OTHERS
 // 4. Remove//ADD from/to the array : array.splice();       