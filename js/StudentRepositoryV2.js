//여러 학생 목록 관리 객체
function StudentRepository() {
  //this = {};
  this.students = new Array();
  this.students = [];
  //return this;
}

StudentRepository.prototype.addStudent = function (student) {
  this.students.push(student);
}

//학생전체리스트
StudentRepository.prototype.getStudents = function () {
  return this.students;
}

//학번으로 학생 검색
StudentRepository.prototype.findBySsn = function (ssn) {
  //find()를 이용한 검색
  // return this.students.find( student => student.ssn === ssn ? true : false);
  return this.students.find( student => student.ssn === ssn || false);
}

//이름으로 학생 검색
StudentRepository.prototype.findByName = function (name) {
  //filter()를 이용한 검색
  // this.students.filter(student => student.name === name ? true : false)
  return this.students.filter(student => student.name === name || false)
}
//학번으로 학생 삭제
// this.removeBySsn = function (ssn) {
//   let deleted = false;
//   this.students.forEach( (student, index) => {
//     if(student.ssn === ssn){
//       if(this.students.splice(index, 1).length !== 0){
//         deleted = true;
//       }
//     }
//   });
//   return deleted;
// }
StudentRepository.prototype.removeBySsn = function (ssn) {
  let deleted = false;
  this.students.forEach( (student, index) => {
    if(student.ssn === ssn){
      this.students.splice(index, 1);
      deleted = true;
    }
  });
  return deleted;
}
//평균범위로 검색
StudentRepository.prototype.findByRange = function (start, end) {
  let list = [];
  this.students.forEach(student => {
    if(student.getAvg() >= start && student.getAvg()<= end){
      list.push(student);
    }
  });
  return list;
}
//sort()를 이용한 정렬검색(학번,학점,총점 등등 한번에)
StudentRepository.prototype.findAllBySort = function (fn) {
  return this.students.sort(fn);
}

//임시테스트
let studentRepository = new StudentRepository();
studentRepository.addStudent(new Student(10, '오렌지', 50, 80, 50));
studentRepository.addStudent(new Student(11, '수박씨', 90, 80, 50));
studentRepository.addStudent(new Student(12, '바나나', 90, 75, 50));
studentRepository.addStudent(new Student(13, '곰젤리', 90, 80, 60));
studentRepository.addStudent(new Student(14, '곰젤리', 90, 80, 45));
studentRepository.addStudent(new Student(15, '마우스', 90, 30, 50));
studentRepository.addStudent(new Student(16, '키보드', 90, 45, 50));

//학번검색
console.log(studentRepository.findBySsn(12).toString());
console.log('------------------------------------------');
//학생명검색
console.log(studentRepository.findByName('곰젤리'));
console.log('------------------------------------------');

//학번으로 삭제
let confirm = studentRepository.removeBySsn(10);
if(confirm){
  console.log('삭제되었습니다.');
} else {
  console.log('삭제가 안되었습니다.');
}
console.log('------------------------------------------');

//전체목록 검색
let allList = studentRepository.getStudents();
for(const student of allList){
  console.log(student.toString());
}
console.log('------------------------------------------');

//평균 내림차순으로 정렬하여 목록 보여주기.
let sortedList = studentRepository.findAllBySort((student1, student2) => student2.getAvg() - student1.getAvg());
sortedList.forEach(student => {
  console.log(student.toString());
})