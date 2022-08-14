//html 태그들을 가져오는 과정
const signUp = document.querySelector("#btnContainer button:last-child");
const signupID = document.getElementById("signupID");
const signupPW = document.getElementById("signupPW");
const signupPwCheck = document.getElementById("signupPwCheck");

//localStorage에 저장할 데이터의 키값을 변수명으로 사용하기 위한 과정
const length = localStorage.length;
const USERTODO_KEY_NAME = "usertodo" + length;

//sign up 버튼을 눌렀을 때 회원가입 처리를 하는 이벤트 함수
function handleSignUpBtn() {
  //입력한 id, 비밀번호, 비밀번호 재확인 값을 가져온다.
  const idValue = signupID.value;
  const pwValue = signupPW.value;
  const pwCheckValue = signupPwCheck.value;

  //비밀번호와 재확인 값이 같을 경우에만 localStorage에 user 객체를 저장하게 한다.
  if(pwValue === pwCheckValue) {
    //user 객체 생성, 여기서 status는 값이 0이면 로그아웃 상태고 1이면 로그인 상태라는 뜻의 값이다.
    const usertodoObj = {
      id: idValue,
      pw: pwValue,
      status: 0,
      todo: []
    };

    localStorage.setItem(USERTODO_KEY_NAME, JSON.stringify(usertodoObj));

    alert("회원가입에 성공했습니다. 로그인 창으로 돌아갑니다.");
    window.location.href = "index.html";
  } else {
    alert("비밀번호와 비밀번호 확인 텍스트가 같지 않습니다! 다시 입력해 주세요.")
  }
}

//sign up 버튼의 onclick 이벤트 추가
signUp.addEventListener("click", handleSignUpBtn);
