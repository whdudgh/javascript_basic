console.log(location.href);

// let url = 'https://www.naver.com';
// location.href= url;

function go(){
  let url = 'https://www.naver.com';
  //속성을 이용한 이동 href속성
  location.href= url;

  //메소드를 이용한 이동 assign
  location.assign(url);

  //replace()메소드를 이용한 이동 -> 뒤로가기(히스토리)가 없음.
  location.replace(url);

  //새로고침 메소드 reload()
  location.reload();
}