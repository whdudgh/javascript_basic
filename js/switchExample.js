  //사용자에게 입력받는 함수 prompt();
  let score = prompt('점수를 입력하세요', 0);
  let number = score/10;
  
  //숫자를 정수로 해주는 메서드
  number = Math.floor(number);
  
  //자바처럼해도 나눈값이 9.9가 나와 무조건 default가 됨.
  switch (number) {
    case 10:
    case 9: console.log('수'); break;
    case 8: console.log('우'); break;
    case 7: console.log('미'); break;
    case 6: console.log('양'); break;
    default: console.log('가'); break;
  }