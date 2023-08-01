//시계 연습

function clock(){
  //css 선택자를 이용하여 span요소 검색
  let spanElement = document.querySelector('#clock');
  //Date 객체 생성
  let today = new Date();
  //현재 시간을 span 요소의 내용으로 추가
  spanElement.innerHTML = today.toLocaleTimeString();
}

//1초단위로 실행되기 위해setInterval(fn, m세컨드)사용
  setInterval(clock, 1000);