const greetingText = document.getElementById("greetingText");
//localStorage의 길이값 가져옴
const localStorageLen = localStorage.length;
//i => 반복문에 사용되는 변수, key => localStorage의 key값을 담을 변수
//value => key에 대응되는 내용을 담을 변수
let i, key, value;

//localStorage에 저장된 값들 중 status 값이 1인 객체를 찾아 해당 객체를 반환하는 함수
function searchStatus() {
  for(i = 0; i < localStorageLen; i++) {
    key = localStorage.key(i);
    value = JSON.parse(localStorage.getItem(key));

    if(value.status === 1) {
      return value;
    }
  }
}

const userName = searchStatus().id;
greetingText.innerText = "Hello " + userName;
