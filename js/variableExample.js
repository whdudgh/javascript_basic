    //ES6 이전의 변수선언 VAR예제
    //변수 재선언 가능.
    // var message = 'Java가 최고여~~~';
    // var message = '웹 프로그래밍 언어의 최강자 JavaScript';
    // console.log(message);

    // 선언 이전에도 사용 가능.
    // console.log(age);
    // var age = 10;

    //초기화 없어도 사용 가능.
    // var weight;
    // console.log(weight);

    //let을 사용한 선언
    //java와 같이 초기화없이는 변수사용 불가능
    let message = '웹 프로그래밍 언어의 최강자 JavaScript';
    console.log(message);

    // 먼저 선언 후 출력
    let age = 10;
    console.log(age);

    //초기화 없어도 사용 가능.
    let weight = 50.6;
    console.log(weight);

    //상수처리
    const MAX = 100;
    console.log(MAX);

    //동적 타이핑
    message = 10;
    message = 15.5;
    console.log(message);

    //자바스크립트 출력 방법 3가지-------------------------------------------------------------------------------------
    //콘솔객체의 log메서드를 이용한 출력
    console.log(message);
    //문서객체의 write메서드를 이용한 출력(이젠 안쓰니 알아만두기)
    document.write('문서에 동적 출력');
    //alert();함수를 이용한 출력
    alert('메시지 출력입니다..');