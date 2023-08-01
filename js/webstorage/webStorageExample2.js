//데이터의 영속성 처리 로컬스토리지
document.querySelector('button').addEventListener('click', event => {
    saveCounter();
});

function saveCounter() {
    
    if (localStorage) {
        // saveCount 속성이 존재하면
        if (localStorage.saveCount) {
            // 카운트 증가
            localStorage.saveCount = parseInt(localStorage.saveCount) + 1;
        } else {
            localStorage.saveCount = 1;
        }
        document.querySelector("#counter").innerHTML = `현재 횟수 : ${localStorage.saveCount}`;
    }
}

