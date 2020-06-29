// 1 :  TERNARY OPERATION

// Condition ? ExpressTrue  : ExpressFalse
/* if the 'condition' is TRUE --> execute  ExpressTrue*/
/* else --> execute ExpressFalse */
// Ex1
function isValid(bool){return bool;}

var answer = isValid(true) ? "It's Valid ! " : "It's Not Valid !";
console.log(answer); /* result  : "It's Valid ! " */

var answer = isValid(false) ? "It's Valid ! " : "It's Not Valid !";
console.log(answer); /* result  : "It's Not Valid !" */
// Ex2
var dynamiqueAnswer="Status of you account is : "+(isValid(true) ? "Active" : "Innactive!");
console.log(dynamiqueAnswer); /* result  : Status of you account is : Active */


var dynamiqueAnswer="Status of you account is : "+(isValid(false) ? "Active" : "Innactive!");
console.log(dynamiqueAnswer); /* result  : Status of you account is : Innactive! */





// 2 :  SWITCH

function switchSeasonNumber(seasonNumber){
    var season;

    switch (seasonNumber){
        case 1:
                season="Season 1 : 'WINTER'";
                break;
        case 2:
                season="Season 2 : 'SPRING'";
                break;
        case 3:
                season="Season 3 : 'SUMMER'";
                break;
        case 4:
                season="Season 4 : 'AUTOMN'";
                break;        
        default :
                season = "Erorr Number !!";
                break;                 
                        }
    return season; 
}