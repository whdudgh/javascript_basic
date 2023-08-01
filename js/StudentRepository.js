//여러 학생 목록 관리 객체
function StudentRepository() {
  //this = {};
  this.students = new Array();

  //학생추가
  this.addStudent = function (student) {
    this.students.push(student);
  }

  //학생전체리스트
  this.getStudents = function () {
    return this.students;
  }

  //학번으로 학생 검색
  this.findBySsn = function (ssn) {
    let allList = this.getStudents();
    for(let i = 0; i<allList.length; i++){
      if(allList[i].ssn === ssn){
        console.log(allList[i].toString());
      }
    }
    return undefined;
    // console.log(allList.find(list => list.ssn === ssn));
  }

  //이름으로 학생 검색
  this.findByName = function (name) {
    let allList = this.getStudents();
    for(let i = 0; i < allList.length; i++){
      if(allList[i].name === name){
        console.log(allList[i].toString());
      }
    }
    // 없으면 undefined or null;
    return undefined;
  }

  //학번으로 학생 삭제
  this.removeBySsn = function (ssn) {
    let allList = this.getStudents();
    for(let i = 0; i < allList.length; i++){
      if(allList[i].ssn === ssn){
        allList.splice(i, 1);
        return true;
      }
    }
    return false;
  }
  //평균범위로 검색 먼저 for문 돌 때 그냥 새로운 리스트에 push로 &&연산자로 해당 하는 객체 담으면됨.
  this.findByRange = function (start, end) {
    //start시작점수, end마지막점수
    let allList = this.getStudents();
    //시작인덱스추출
    let startIndex = 0;
    //끝인덱스추출
    let endIndex = 0;
    //성적 기준으로 배열을 정렬
    for (let i = 0; i < allList.length; i++) {
      for (let j = 0; j < allList.length - 1 - i; j++) {
        if (allList[j].getAvg() > allList[j + 1].getAvg()) {
          let tmp = allList[j];
          allList[j] = allList[j + 1];
          allList[j + 1] = tmp;
        }
      }
    }
    //1.정렬된 배열에서 최초로 start점수를 포함하는 인덱스추출
    for (let i = 0; i < allList.length; i++) {
      if (allList[i].getAvg() >= start) {
        startIndex = i;
        break;
      }
    }
   //2.정렬된 배열의 뒷부분에서부터 최초로 end점수를 포한하는 인덱스 추출
    for (let i = allList.length - 1; i >= 0; i--) {
      if (allList[i].getAvg() <= end) {
        endIndex = i + 1;
        break;
      }
    }
    //1,2의 범위내에 있는 학생을 잘라내어 새로운 배열로 만든 뒤 출력
    let rangeList = allList.splice(startIndex, endIndex);
    for (const student of rangeList) {
      console.log(student.toString());
    }
  }
  //return this;
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
// studentRepository.findBySsn(12);

//학생명검색
// studentRepository.findByName('곰젤리');

//학번으로 삭제
// studentRepository.removeBySsn(10);

//전체목록 검색
// let allList = studentRepository.getStudents();
// for(const student of allList){
//   console.log(student);
// }

//범위검색
studentRepository.findByRange(30, 60);