//html의 clock 요소값을 가져옴
const clockText = document.getElementById("clock");

//이 함수가 호출되었을 시점의 시:분:초 형태의 값을 clock 요소에 넣는 함수
function realTime() {
  const date = new Date();
  const hour = String(date.getHours()).padStart(2, "0");
  const minute = String(date.getMinutes()).padStart(2, "0");
  const second = String(date.getSeconds()).padStart(2, "0");
  clockText.innerText = `${hour}:${minute}:${second}`;
}

//setInterval 함수로 위의 시간을 표시하는 함수인 realTime 함수를 1000(1초)ms 마다 호출하게 된다.
//하지만 setInterval만 사용하면 페이지가 로드되고 1초 뒤부터 시간이 표시되기 때문에 realTime()을 먼저 사용
realTime();
setInterval(realTime, 1000);
