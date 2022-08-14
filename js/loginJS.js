//html 요소 가져오기
const signIn = document.querySelector("#btnContainer button:first-child");
const signUp = document.querySelector("#btnContainer button:last-child");
const loginID = document.getElementById("loginID");
const loginPW = document.getElementById("loginPW");
const localStorageLen = localStorage.length;

//i => for문을 돌 변수, key => 키값을 얻어와 담을 변수, value => 해당 키값으로 내용을 담아올 변수
let i, key, value;

//로그인 페이지 처음 호출 시 status가 1인 객체가 이미 localStorage에 있다면, 즉 로그인이 되어 있는 계정이
//존재한다면 로그인 창이 나오지 않고 바로 해당 계정의 todo 리스트 화면으로 넘어가게 하는 역할의 함수
function checkStatus() {
  for(i = 0; i < localStorageLen; i++) {
    key = localStorage.key(i);
    value = JSON.parse(localStorage.getItem(key));

    if(value.status === 1) {
      break;
    }
  }
  if(i !== localStorageLen) {
    return true;
  } else {
    return false;
  }
}

//sign up(회원가입) 버튼을 눌렀을 때 회원가입 페이지로 갈 수 있게 하는 버튼
function handleSignUpBtn() {
  window.location.href = "signup.html";
}

//로그인 시 현재 회원가입 되어 있는지 파악하여 localStorage에 없으면 회원가입하라고 알림창을 띄우고,
//localStorage에 이미 있는 정보라면 로그인 되었다는 알림창과 함께 todo 리스트 화면으로 넘어가게 하는 함수
function handleSignInBtn() {
  const idValue = loginID.value;
  const pwValue = loginPW.value;

  //사용자가 id 혹은 pw를 입력했는지 확인 후, 입력했으면 localStorage에서 해당 계정을 찾는 과정
  if(idValue === "" || pwValue === "") {
    alert("ID 혹은 비밀번호를 입력하지 않았습니다.");
  } else {
    for(i = 0; i < localStorageLen; i++) {
      //key값을 받아온 후 해당 키값으로 getItem을 사용해 내용값을 value에 받아온다.
      key = localStorage.key(i);
      value = JSON.parse(localStorage.getItem(key));

      //for문을 돌다가 현재 로그인을 시도하는 id, pw와 같은 값을 찾게 되면 해당 계정 상태를 로그인 활성화로
      //바꾸고, (status = 1), 바뀐 상태를 localStorage에 적용시킨 후 todo리스트 창으로 넘어가게 된다.
      if(idValue === value.id && pwValue === value.pw) {
        alert("로그인에 성공했습니다. todo리스트 화면으로 넘어갑니다.");
        value.status = 1;
        localStorage.setItem(key, JSON.stringify(value));
        window.location.href = "todomain.html";
        break;
      }
    }
    if(i === localStorageLen) {
      alert("현재 입력된 계정의 가입이 확인되지 않습니다.");
    }
  }
}

//버튼들의 onclick 이벤트 추가
signUp.addEventListener("click", handleSignUpBtn);
signIn.addEventListener("click", handleSignInBtn);

//checkStatus 함수의 반환값이 true면(현재 로그인된 계정이 있다면), 로그인 화면을 거치지 않고
//바로 todomain 화면으로 가라는 뜻의 코드
if(checkStatus()) {
  window.location.href = "todomain.html";
}
