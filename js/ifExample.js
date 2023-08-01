//사용자에게 입력받는 함수 prompt();
  let score = prompt('점수를 입력하세요', 0);
  console.log(typeof score);

//if문
// let score = 88;

//단순if문
if(score >= 60){
  console.log('합격');
} else {
  console.log('불합격');
}

//if else if
if(score >= 90){
  console.log('수');
} else if(score >= 80){
  console.log('우');
} else if(score >= 70){
  console.log('미');
} else if(score >= 60){
  console.log('양');
} else {
  console.log('가');
} 