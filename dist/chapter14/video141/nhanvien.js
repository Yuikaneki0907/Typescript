export default class NhanVien {
    get id() {
        return this._id;
    }
    set id(value) {
        this._id = value;
    }
    constructor(name, id, salary) {
        this.name = name;
        this._id = id;
        this.salary = salary;
    }
}
