//학생객체 생성을 위한 틀(생성자 함수)
// export
class Student {
  constructor(ssn, name, kor, english, math) {
    //this = {};
    this.ssn = ssn;
    this.name = name;
    this.kor = kor;
    this.english = english;
    this.math = math;
    //return this; 
  }
  //공통속성 추가
  static schoolName = 'Ezen초등학교';
  static showSchoolName() {
    console.log(Student.schoolName);
  }

  getSum() {
    return this.kor + this.english + this.math;
  }

  getAvg() {
    return this.getSum() / 3;
  }
  //object프로토타입 객체의 toString() 오버라이딩
  toString() {
    return `${this.ssn} \t ${this.name} \t ${this.kor} \t ${this.english} \t ${this.math} \t ${this.getSum()} \t ${this.getAvg()}`
  }
  //기능 추가

}
//정적(static) 속성 및 메소드 추가

//객체의 생성자함수의 메소드를 Student의 프로토타입 객체에 할당.

// Student.prototype.schoolName = '이젠 초등학교'; //프로토타입에 넣어도 되지만 넣지말고
//returnt this;



// let student = new Student(10, '오오미', 90, 80, 50);
// console.log(student.toString());
// console.dir(Student);

// let student2 = new Student(10, '오오미', 90, 80, 50);
// let student3 = new Student(10, '오오미', 90, 80, 50);
// console.log(student1.schoolName);
// console.log(student1.toString()); //prototype의 toString() 메소드 호출
// console.log(student2.toString()); //prototype의 toString() 메소드 호출
// console.log(student3.toString()); //prototype의 toString() 메소드 호출

// //프로토타입 상속 체인 검증
// console.log('name' in student);
// console.log('valueOf' in student);
// //objdect prototype객체의 메소드 재사용
// //hasOwnProperty => 자기꺼만 검색 | in연산자는 부모꺼까지 전부 검색.
// console.log(student.hasOwnProperty('name'));
// console.log(student.hasOwnProperty('valueOf'));
// console.log(student.toString());

// Student.showSchoolName();
/**
 * 자바스크립트의 객체
 * 1.사용자 정의 객체 -> 변수로 바로생성 let student = {name : '바나나'} | 함수틀로 생성 function Student(name){this.name = name;}
 * 2.내장객체 -> 자바스크립트에 미리정의된객체 -> 표준내장객체
 *            -> 브라우저 내장객체 -> a.Dom | b.Bon
 */
//app.js에서 호출하기 위해  선언
let xxx = 500;
function yyy(){
  console.log('오');
}

export {Student, xxx, yyy};