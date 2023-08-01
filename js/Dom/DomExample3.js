//속성 제어하기
//동적으로 a태그의 href속성 읽어오기
//a먼저 접근 후 속성접근
let aElement = document.querySelector('a');
let value = aElement.getAttribute('href');
console.log(value);

//속성 바꾸기 setAttribute
aElement.setAttribute('href','https://www.google.com');

//노드 생성 및 추가 creatElement(); | createTextNode(); | appendChild();
// let liElement =  document.createElement('li');
// let txt = document.createTextNode('밥먹으니 졸려');
//li에 텍스트 붙이기
// liElement.append(txt);
//붙일곳 찾아 붙이기.
// document.querySelector('ol').appendChild(liElement);

//1.)추가방법
  //escape문자 처리되어 태그이름 그대로 출력
  document.querySelector('ol').textContent = '<b>졸지마</b>';
  //태그 추가됨.
  document.querySelector('ol').innerHTML = '<b>졸지마</b>';
  //태그째로 읽어옴.
  console.log(document.querySelector('ol').innerHTML);
  //태그빼고 읽어옴.
  console.log(document.querySelector('ol').innerText);

  function show(){
    let div = '<div>댓글 내용입니다...</div>';
    let article = document.querySelector('article');
    article.innerHTML = div;
  }
  
  // document.querySelector('button');