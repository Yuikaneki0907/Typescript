console.log("interface & implements");
class NhanVien {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
}
class LapTrinhVien extends NhanVien {
    constructor(id, name, skill) {
        super(id, name);
        this.skill = skill;
    }
}
const lee = new LapTrinhVien(123, "lê", "React");
class Bird {
    makeSound() {
        console.log("Chip chip...");
    }
    doFly() {
        console.log("Bird can fly");
    }
}
const myBird = new Bird();
myBird.makeSound();
myBird.doFly();
export {};
