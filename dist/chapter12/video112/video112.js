"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//Class: Mo ta chung chung, tong quat
class Lion {
    constructor() {
        //thuoc tinh
        this.name = "A";
    }
    //Hanh vi
    sleep() {
        console.log("lion is sleeping...", this.name);
    }
}
//Object: Mo ta chi tiet
const sutu1 = new Lion();
sutu1.color = "yellow";
sutu1.name = "leee";
sutu1.sleep();
console.log("===============");
const sutu2 = new Lion();
sutu2.name = "anhhh";
sutu2.color = "white";
sutu2.sleep();
