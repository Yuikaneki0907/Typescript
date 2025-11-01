"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class NhanVien {
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
exports.default = NhanVien;
