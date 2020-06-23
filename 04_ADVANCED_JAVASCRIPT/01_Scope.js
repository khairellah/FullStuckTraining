// SCOPE

    // ROOT SCOPE ==> (Windows)
var fun = 5;

function funerFunction(){
    // CHILD SCOPE
    var fun="Byee"; /* --> Another Fun var */
    console.log(fun);
}

function funestFunction(){
    // CHILD SCOPE
    fun="Hiiii";  /* -->  Modify the root scope fun*/
    console.log(fun);
}


    //CALL
console.log(fun);