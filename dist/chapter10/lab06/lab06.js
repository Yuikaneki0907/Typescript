"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const st1 = {
    id: 1,
    name: "Lee Anhhhh",
    email: "leanh@gmail.com",
    isPremium: true,
    contact: 9854321
};
const st2 = {
    id: 2,
    name: "Lee",
    email: "lee@gmail.com",
    isPremium: false,
    contact: "09854321"
};
const course1 = {
    courseId: 123,
    title: "Tu hoc lap trinh",
    price: 5432,
    students: []
};
const registerStudentToCourse = (student, course) => {
    course.students.push(student);
};
const printCourseInfo = (course) => {
    if (course.students && course.students.length !== 0) {
        for (let key in course.students) {
            console.log(course.students[key].name);
        }
    }
    else {
        console.log("chưa có học viên nào");
    }
};
printCourseInfo(course1);
registerStudentToCourse(st1, course1);
registerStudentToCourse(st2, course1);
printCourseInfo(course1);
