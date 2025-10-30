"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class User {
    get email() {
        return this._email;
    }
    set email(value) {
        this._email = value;
    }
    constructor(name, email, role) {
        this.name = name;
        this._email = email;
        this.role = role ?? "student";
    }
    getInfo() {
        console.log(`Tên: ${this.name}
Email: ${this._email}
role: ${this.role}
`);
    }
}
class Teacher extends User {
    constructor() {
        super(...arguments);
        this.courses = [];
    }
    addCourse(course) {
        this.courses = [...this.courses, course];
        this.courses.forEach((course, index) => {
            console.log("Khóa học", index, ":", course);
        });
    }
    printUserInfo() {
        console.log(`[${this.role}] ${this.name} - Courses Taught: ${this.courses}`);
    }
}
class Student extends User {
    constructor() {
        super(...arguments);
        this.enrolledCourses = [];
    }
    enroll(course) {
        this.enrolledCourses.push(course);
    }
    printUserInfo() {
        const coursesName = this.enrolledCourses.join(",");
        console.log(`[${this.role}] ${this.name} - Enrolled Courses: ${this.enrolledCourses}`);
    }
}
const lee = new Student("lee", "leanh@gmail.com");
lee.enroll("NodeJs");
lee.enroll("ReactJs");
const anh = new Teacher("anh", "anh@gmail.com", "teacher");
anh.addCourse("ReactJs");
console.log("======================");
lee.printUserInfo();
anh.printUserInfo();
