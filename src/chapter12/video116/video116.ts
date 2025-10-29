export { };

console.log("Tính đóng gói");

class Cat {
    name:  string;
    private age_: number;
    private _kindOf: string;
    public get kindOf(): string {
        return this._kindOf;
    }
    public set kindOf(value: string) {
        this._kindOf = value;
    }

    //setter
    set age(age: number){
        this.age_ = age;
    }

    //getter
    get age(){
        return this.age_
    }

    constructor(name: string, age: number, kindOf: string){
        this.name = name;
        this.age_ = age;
        this._kindOf = kindOf;
    }

    makeSound() {
        console.log("Meo meo...")
    }
}

const myCat = new Cat("Miêu", 5, "meo");
myCat.age = 20 //set
const a = myCat.age //get