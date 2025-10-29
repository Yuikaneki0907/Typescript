export { };

console.log("interface & implements");

class NhanVien {
    id: number;
    name: string;
    constructor(id: number, name: string){
        this.id = id;
        this.name = name;
    }
}

class LapTrinhVien extends NhanVien{
    skill: string;

    constructor(id: number, name: string, skill: string){
        super(id, name);
        this.skill = skill
    }
}

const lee = new LapTrinhVien(123, "lê", "React")


//interface: giải quyết đa kế thừa

interface IAnimal {
    makeSound(): void; // chỉ định nghĩa tên và kiểu trả về của function
}

interface IFlyable {
    doFly(): void;
}

class Bird implements IAnimal, IFlyable{
    name: string | undefined;

    makeSound(){
        console.log("Chip chip...")
    }

    doFly(): void {
        console.log("Bird can fly")
    }
}

const myBird = new Bird();
myBird.makeSound();
myBird.doFly();