// New Features in 2017

// String 
// 1.A : .padStart() :  add X space in the 'start' of a String

"zakaria".padStart(10); // --> "   zakaria"

// 1.B : .padEnd() :  add X space in the 'end' of a String

"zakaria".padEnd(10); // --> "zakaria   "


// 2 : Trailing Commas in Function's parameter lists and calls
const fun = (
                a,
                b,
                c,
                d,    // --> we add a comma here !!
                )=> {
                         console.log(a) ;
                    }

fun(1,2,3,4,);


// 3 : Object.values & Object.entries : allow as to do something similar to arrays but on Objects

// --> Old way of doing that : Object.keys
// EX

let obj = {
    username0 : "santa",
    username1 : "zakaria",
    username2 : "adnan"
}

// Old way : Object.keys
Object.keys(obj).forEach((key,index) =>{
    console.log(key,obj[key]);  
});

/*  Result  :   
                username0 santa
                username1 zakaria
                username2 adnan
*/


// Object.values : gets only the values
Object.values(obj).forEach(value => {
    console.log(value);
});

/*  Result  :   
                santa
                zakaria
                adnan
*/


// Object.entries : get keys & values in arrays
Object.entries(obj).forEach(value => {
    console.log(value);
});

/*  Result  :   
                ["username0", "santa"]
                ["username1", "zakaria"]
                ["username2", "adnan"]
*/


Object.entries(obj).map(value =>{
    return value[1] + value[0].replace('username','');
})

/*  Result  :  ["santa0", "zakaria1", "adnan2"]  : gets array of values with the index from our object*/


// Async Await : comming soon ....