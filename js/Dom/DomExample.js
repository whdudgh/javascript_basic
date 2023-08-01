//html요소에 접근하고 싶음(계층구조로 접근)
console.dir(document.firstChild); //<!DOCTYPE html> 접근한것.
console.dir(document.firstElementChild); //<html> 접근한것.
console.dir(document.firstElementChild.constructor);

//1.돔루트로 계층 구조로 검색
//Node의 공통 속성 3개
console.log(document.firstElementChild.nodeType === Node.ELEMENT_NODE);
console.log(document.firstElementChild.nodeName);
console.log(document.firstElementChild.nodeValue);

//body요소 접근(엔터값도 자식으로 취급하여 element가 들어간걸로사용해야함.)
console.log(document.firstElementChild.lastElementChild.nodeName);

//2.메소드로 특정 요소 접근

  //(1)태그이름으로접근
  let pArray = document.getElementsByTagName('p'); //모든p를 담은 배열을 리턴해줌.
  //리턴타입이 p를담은 배열이 아니고 유사배열(배열비슷하지만 foreach같은 메소드 사용못하는것)이 리턴됨.
  //for of나 for in은 사용 가능.
  console.log(pArray.constructor);
  for (const element of pArray) {
    console.log(element.nodeName);
  }
  //(2)id속성으로 접근하는 방법
  let pElement = document.getElementById('myP');
  console.dir(pElement);

  //(3)클래스명으로 접근하는방법
  let htmlCollection = document.getElementsByClassName('container');
  console.dir(htmlCollection);

//3.css선택자를 이용한 검색
  //하나짜리 얻어올때
  console.dir(document.querySelector('p'));
  //목록으로 얻어올때(nodeList로 받아옴.) 
  console.dir(document.querySelectorAll('p'));
  let nodeList =document.querySelectorAll('p');
  nodeList.forEach(element => {
    console.log(element.nodeName);
  })

  //id선택자를 통한 접근
  let pEl = document.querySelector('#myP');
  console.log(pEl.nodeName);

  //myP id에 접근
  let textNode = pEl.firstChild;
  console.log(textNode.nodeName);
  console.log(textNode.nodeValue);
  // alert(textNode.nodeValue);
  
  console.log(document.querySelector('.container').firstChild.nodeValue);

  console.log(document.querySelector('li:first-child').firstChild.data);
  console.log(document.querySelector('li:last-child').firstChild.data);
  let list = document.querySelectorAll('li:nth-child(2n+1)');
  list.forEach(element => {
    console.log(element.firstChild.nodeValue);
  });