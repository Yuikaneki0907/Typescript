export{ };

console.log("Generic Classes");

class MagicBox <T>{
    content: T;

    constructor(content: T){
        this.content = content;
    }
}

class NumberBox {
    content: number;

    constructor(content: number){
        this.content = content;
    }
}

const a = new MagicBox<string>("lele");
console.log(a.content)