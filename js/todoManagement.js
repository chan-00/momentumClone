const inputForm = document.getElementById("input-form");
const inputTodo = document.getElementById("inputTodo");
const todoContainer = document.getElementById("todoContainer");

//각각 user의 키값, 정보가 들어갈 변수이다.
let userKey, userObj;

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
/*
function saveLocal() {
  localStorage.setItem(userKey, JSON.stringify(userObj));
}
*/

//삭제 버튼을 눌렀을 때 호출되는 함수
function deleteTodo(event) {
  //삭제를 위해 부로 태그(li)의 id 값을 가져왔다.
  const parentDiv = event.target.parentNode;
  const parentId = parentDiv.id;

  //화면상에서의 해당 todo 리스트를 지운다.
  parentDiv.remove();

  userObj.todo = userObj.todo.filter(obj => (String(obj.id) !== parentId));
  localStorage.setItem(userKey, JSON.stringify(userObj));
}

//user 객체를 받아서 화면에 그려주는 역할을 맡는 함수
function paintTodo(userInfo) {
  //createElement로 텍스트와 버튼을 감싸줄 li, 텍스트가 들어가는 span, button 태그를 만들어 줬다.
  const li = document.createElement("li");
  const span = document.createElement("span");
  const btn = document.createElement("button");

  //추후에 삭제를 위해 li에 id값을 부여하고, span과 button 태그에 각각 맞는 텍스트를 넣어 줬다.
  li.id = userInfo.id;
  span.innerText = userInfo.text;
  btn.innerText = "❌";

  //삭제 버튼에 click 이벤트를 추가해 준다.
  btn.addEventListener("click", deleteTodo);

  //appendChild로 추가해서 화면에 표시되게 한다.
  todoContainer.appendChild(li);
  li.appendChild(span);
  li.appendChild(btn);
}

//input 태그에서 submit 이벤트가 발생할 경우 화면에 입력한 todo 리스트를 표시하기 위한 함수
function handleInputTodo(event) {
  //submit의 기본 동작(페이지 새로고침)을 없앤다.
  event.preventDefault();

  const inputValue = inputTodo.value;
  inputTodo.value = "";

  //나중에 삭제 버튼 기능 구현 때 사용하기 위해 id를 부여했다.
  const userInfo = {
    text: inputValue,
    id: Date.now()
  };

  //localStorage에 바뀐 정보를 반영한다.
  userObj.todo.push(userInfo);
  //새로 todo 리스트가 추가되었을 때 화면에 그려주는 paintTodo 함수로 정보를 넘긴다.
  paintTodo(userInfo);

  localStorage.setItem(userKey, JSON.stringify(userObj));
}

//화면이 새로 로드되었을 때 해당 계정에 기존 todo 리스트가 있다면 화면에 표시해 줘야 한다.
userKey = returnUserKey();
userObj = JSON.parse(localStorage.getItem(userKey));

//submit 이벤트 발생 시 호출할 함수 추가
inputForm.addEventListener("submit", handleInputTodo);

//현재 로그인된 계정의 todo 속성 길이가 0이 아니라면(그 전에 작성해 놓은 todo 리스트가 있다면),
//반복문을 돌며 paintTodo 함수를 호출하여 화면에 todo 리스트를 그린다.
if(userObj.todo.length !== 0) {
  for(let i = 0; i < userObj.todo.length; i++) {
    paintTodo(userObj.todo[i]);
  }
}
