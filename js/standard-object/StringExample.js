let ssn = prompt('주민번호를 입력하시오..');
//ssn이 문자열이 있으면 true로 인식함 자바스크립트는
//ssn === undefined 써도 되지만 스크립트는 이렇게 사용함.
if(ssn){
  // const c = ssn.charAt(7);
  // - 기준 +1자리에 있는 숫자를 기준으로함.
  const c = ssn.charAt(ssn.indexOf('-')+1);
  switch (c) {
    case '1': 
    case '3': alert('남자'); break;
    case '2': 
    case '4': alert('여자'); break;
    default : alert('외국인'); break;
  }
} else {
  alert('잘못 입력하셨습니다..');
}