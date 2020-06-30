// Reference Type
let object1 = {value:10};
let object2 = object1;
let object3 = {value:10};

object1 === object1  /* True : because the same reference */
object1 === object3  /* False : not the same reference */

// Context
const object4 = {
    a:function(){
        console.log(this) /* this = window */
    }
}

// Instantiation
class Player{
    constuctor(name,type){
        this.name=name;
        this.type=type;
    }

    introduce(){return `Hello i'm ${this.name}, I'm a ${this.type}`}
}

class Wizard extends Player{
    constuctor(name,type){
        super(name,type)
    }

    play(){console.log(`I'm a ${this.type}`);}
}



const wizard1 = new Wizard("Adnan","Type1");
const wizard2 = new Wizard("Zakaria","Type2");

wizard1.play();
wizard2.introduce();