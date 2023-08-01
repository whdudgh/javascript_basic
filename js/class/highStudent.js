//Student를 상속받는 HighStudent클래스 
import { Student } from "./Student.js";
export
class HighStudent extends Student {
  //고등학생에 추가속성 age가 있다 가정하고함.
  constructor(ssn, name, kor, english, math, age){
    //this = {};
    super(ssn, name, kor, english, math);
    this.age = age;
    //setter getter 편의상 생략
  }
    //메소드 재정의(Overriding)
  toString() {
    return super.toString() + `\t ${this.age}`;
  }
}

// let highStudent = new HighStudent(10, '오오미', 90, 80, 50, 18);
// console.log(highStudent.toString());

// let string = new String('문자열');