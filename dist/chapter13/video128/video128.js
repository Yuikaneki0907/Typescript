console.log("Generic Classes");
class MagicBox {
    constructor(content) {
        this.content = content;
    }
}
class NumberBox {
    constructor(content) {
        this.content = content;
    }
}
const a = new MagicBox("lele");
console.log(a.content);
export {};
