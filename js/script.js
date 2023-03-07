const adviceId = document.querySelector('#adviceId');
const adviceText = document.querySelector('#adviceText');
const btn = document.querySelector('#btn');

function loadAdvice() {
    //fetch로 advice API 가져오기
    fetch ('https://api.adviceslip.com/advice')
    .then(response => {//fetch 사용시 첫번째 인자는 response로 json을 불러와야 한다
        return response.json();
    })
    .then(adviceData => {
        const adviceNum = adviceData.slip.id;
        const advice = adviceData.slip.advice;

        adviceId.textContent = adviceNum;
        adviceText.innerHTML = `<p>${advice}</p>`
    })
    .catch(error => {
        console.log(error)
    })
}

//버튼클릭시 조언생성
btn.addEventListener('click', function() {
    loadAdvice();
})

//새로고침시 조언생성
window.onload = () => {
    loadAdvice();
}