//html에서 지역명, 온도, 날씨를 표현할 span 태그의 id 값들로 불러왔다.
const locName = document.getElementById("locName");
const locTemp = document.getElementById("locTemp");
const locWeather = document.getElementById("locWeather");

//openweathermap api 키값
const USER_API_KEY = apiConfig.apikey;

//현재 위치 정보를 가져오는 것을 성공했을 때 호출되는 함수이다.
//event 함수와 마찬가지로 다양한 위치 정보가 들어 있는 매개 변수 1개를 넘겨주게 된다.
function displayPosition(pos) {
  //매개 변수에서 위도, 경도 값을 변수에 저장한다.
  const lat = pos.coords.latitude;
  const lon = pos.coords.longitude;

  //위치 정보를 불러오려면 url 값에 현재 위치의 위도, 경도, 나의 api 키값을 넣어야 하기 때문에,
  //따로 변수로 저장해 주었다.
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${USER_API_KEY}`;

  //fetch로 url에 담긴 파일을 불러와 json 정보를 추출하고(response.json()), 추출한 데이터 중
  //원하는 정보를 화면에 표시하게끔 했다.(위에서 순서대로 지역명, 온도, 날씨)
  fetch(url).then((response) => response.json()).then((data) => {
    locName.innerText = data.name + ", ";
    //온도의 소수점 두 자리수까지 표현을 위해 100을 곱한 후 floor로 나머지 소수점을 버린 숫자에,
    //다시 100을 나눠 줌으로써 소수점 두 자리수로 표현을 했다.
    locTemp.innerText = (Math.floor((data.main.temp - 273.15) * 100) / 100) + "℃";
    locWeather.innerText = data.weather[0].main;
  });
}

//어떤 이유로(ex : 사용자가 브라우저에서 위치 허용 X) 위치 정보를 가져오는 데 실패했을 때 호출되는 함수
function errPosition() {
  alert("사용자가 위치 허용을 하지 않았기에 위치 정보가 표시되지 않습니다.");
}

//사용자의 현재 위치를 가져오고, 성공했을 때 실행할 함수(displayPosition)와,
//실패했을 때 실행할 함수(errPosition)를 지정한다.
navigator.geolocation.getCurrentPosition(displayPosition, errPosition);
