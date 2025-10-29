export { };

console.log("Tính kế thừa");

class Parent {
    gold: number | undefined;
    money: number |undefined;

    shareHouse(){
        console.log("share a house from parent");
    }
}

class Child extends Parent {
    name: string | undefined;
    shareHouse(){
        super.shareHouse(); //gọi từ cha
        console.log("share a house from child");
    }
}

const lee = new Child();
lee.shareHouse()

const ba = new Parent();
ba.shareHouse()