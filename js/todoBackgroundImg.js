//이미지 파일명 배열 선언
const imgArr = [
  "pic01.jpg", "pic02.jpg", "pic03.jpg", "pic04.jpg", "pic05.jpg", "pic06.jpg", "pic07.jpg",
  "pic08.jpg", "pic09.jpg", "pic10.jpg",
];

//Math.random() 함수를 사용해 위의 10개 이미지 중 랜덤으로 이미지 파일명을 가져와 경로를 생성한다.
const randomImg = "img/" + imgArr[Math.floor(Math.random() * 10)];
//backgroundImage 값으로 위에서 랜덤값으로 뽑은 경로를 넣어서 랜덤 이미지를 적용시킨다.
document.body.style.backgroundImage = "url('" + randomImg + "')";
