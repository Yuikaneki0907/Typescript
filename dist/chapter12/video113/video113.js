console.log("Thuộc tính và phương thức");
class SinhVien {
    sleep() {
        console.log(this.name, "is sleeping...");
    }
}
const sv1 = new SinhVien();
sv1.name = "Lê anh";
sv1.id = "09";
sv1.sleep();
const sv2 = new SinhVien();
sv2.sleep();
export {};
