export { };

class User {
    public name: string;
    private _email: string;
    public get email(): string {
        return this._email;
    }
    public set email(value: string) {
        this._email = value;
    }
    protected role: "student" | "teacher";

    constructor(name: string, email: string, role?: "student" | "teacher"){
        this.name = name;
        this._email = email;
        this.role = role ?? "student";
    }

    getInfo() {
        console.log(
`Tên: ${this.name}
Email: ${this._email}
role: ${this.role}
`
        )
    }
}

class Teacher extends User{
    courses: string[] = [];

    addCourse(course: string){
        this.courses = [...this.courses, course]
        this.courses.forEach((course, index)=>{
            console.log("Khóa học", index, ":", course)
        })
    }

    printUserInfo(){
        console.log(
`[${this.role}] ${this.name} - Courses Taught: ${this.courses}`
        )
    }
}

class Student extends User{
    enrolledCourses: string[] = [];

    enroll(course: string){
        this.enrolledCourses.push(course);
    }

    printUserInfo(){
        const coursesName = this.enrolledCourses.join(",")
        console.log(
`[${this.role}] ${this.name} - Enrolled Courses: ${this.enrolledCourses}`
        )
    }
}

const lee = new Student("lee", "leanh@gmail.com");
lee.enroll("NodeJs");
lee.enroll("ReactJs");

const anh = new Teacher("anh", "anh@gmail.com", "teacher");
anh.addCourse("ReactJs");

console.log("======================")
lee.printUserInfo();
anh.printUserInfo();