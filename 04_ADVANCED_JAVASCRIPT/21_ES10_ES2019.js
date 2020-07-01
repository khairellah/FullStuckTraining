// 1 : .flat() : works with arrays : used to remove other/nested arrays inside our main array --> one global array
// Ex 
const array1 = [1,2,3,4,5,6];
array1.flat();
// --> Result : [1, 2, 3, 4, 5, 6]
const array2 = [1,2,[3,4],5,6,7,[8,9,10]];
array2.flat();
// --> Result : [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] : remove the arrays inside our array --> one global array

// NOTE !! : .flat(1) 'default' : 1 means how meny times i want to flat or remove nested array in level 1 but if we had oter levels (aray inside aray inside other array) we must specify a level rather than '1'
// ex
const array3 = [1,2,[3,4],5,[6,7,[8,9,10]]];
array3.flat(1);
// result not completed !! : [1, 2, 3, 4, 5, 6, 7,[8, 9, 10]]    
// solution
array3.flat(2); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]   ---> Now it's OoOok

// we also use .flat() to clean up our data (array)
//Ex
const entries = [1,2,3,4,,,,,,9,10];
entries.flat();
// Rersult : [1, 2, 3, 4, 9, 10] --> remove the empty values --> clean up



/***************************************************************************************/

// 2 :  .flatMap() : do both flat & map on arrays
const arayChaine = ['a','b',['c','d'],'e','f','g','h','i',['j','k',['l','m'],'n'],'o']
const arayChaineFlatMap = arayChaine.flatMap(chaine => chaine + "PIW" )
// result :  ["aPIW", "bPIW", "c,dPIW", "ePIW", "fPIW", "gPIW", "hPIW", "iPIW", "j,k,l,m,nPIW", "oPIW"] --> adding PIW 

/***************************************************************************************/

// 3 : .trimStart() & trimEnd() : remove spaces from the 'start' or the 'end'
let useeEmail1 = '           test@gmail.com';
let useeEmail2 = 'test@gmail.com            ' ;
useeEmail1.trimStart();     // --> "test@gmail.com"
useeEmail2.trimEnd();       // --> "test@gmail.com"

/***************************************************************************************/

// 3.A from array to object :  Object.fromEntries : transform a list of arrays to object (key : value)
const userProfiles = [['adnan',27],['zakaria',26],['khairellah',28]];
const arrayToObject = Object.fromEntries(userProfiles);
/* Result :
        {
            adnan: 27,
            khairellah: 28,
            zakaria: 26
        }
*/

// 3.B from Object to array (reverse of 3.A) :  Object.Entries : transform an object to arrays
const objectToArray = Object.entries(arrayToObject);
/* Result :
        from Object : {adnan: 27, zakaria: 26, khairellah: 28}
        to   Array  : [['adnan',27],['zakaria',26],['khairellah',28]];
*/



/***************************************************************************************/

// 4 : Try & catch
try{
    4+5
    }catch{
        console.log("there is an error !! ");
            }
  // result : 9
  
  try{
    adnan + 200
    }catch{
        console.log("there is an error !! ");
            }
  // result : there is an error !! 

  /* in version 9 we had to add the erorr : catch(error) 
    // exemple         
   
    try{
    adnan + 200
    }catch (error ){
        console.log("there is an error !! "+error);
            }
  
  --> there is an error !! ReferenceError: adnan is not defined
  bu now (ES10) it's Optional
  
  
  */