//브라우저 가운데 창띄우기
function openWindowCenter(ur, name, width, height){
  //x축의 정가운데
  const x = (screen.availWidth - width) / 2;
  //y축의 정가운데
  const y = (screen.availHeight - height) / 2;
  //
  const option = `x=${x}, y=${y}, width=${width}, height=${height}`;
  open(url, name, option);
}

openWindowCenter('../../hello.html', '가운데창', 300, 200);