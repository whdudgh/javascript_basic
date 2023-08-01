//모듈화된 Student를 import로 받아옴
import { Student, yyy } from "./Student.js";
import { HighStudent } from "./highStudent.js";
// import { yyy } from "./Student.js";
let student = new Student(10, '오오미', 90, 80, 50);
console.log(student.toString());

let highStudent = new HighStudent(10, '버나나', 90, 80, 50, 18);
console.log(highStudent.toString());

yyy();