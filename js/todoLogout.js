const logoutbtn = document.getElementById("logoutbtn");

//각각 user의 키값, 정보가 들어갈 변수이다.
let userk, userO;

//현재 로그인 되어 있는 객체(status 1)를 찾아 해당 객체의 키값을 반환한다.
function returnUserKey() {
  let key, value, i;
  for(i = 0; i < localStorage.length; i++) {
    key = localStorage.key(i);
    value = JSON.parse(localStorage.getItem(key));
    if(value.status === 1) {
      return key;
    }
  }
}

//현 상태를 localStorage에 저장하는 역할의 함수
function saveLocal() {
  localStorage.setItem(userk, JSON.stringify(userO));
}

//logout 버튼을 눌렀을 때 해당 계정의 status를 0으로 바꾸고 로그인 창으로 페이지를 바꾸는 역할의 함수
function handleLogout() {
  userk = returnUserKey();
  userO = JSON.parse(localStorage.getItem(userk));

  //로그인 상태를 나타내는 status를 0으로 바꾸고, 변경된 상태를 localStorage에 저장한다.
  userO.status = 0;
  saveLocal();

  //alert 창으로 로그아웃 되었음을 알리고, 로그인 페이지로 돌아간다.
  alert("로그아웃 되었습니다. 로그인 페이지로 돌아갑니다.");
  window.location.href = "index.html";
}

logoutbtn.addEventListener("click", handleLogout);
