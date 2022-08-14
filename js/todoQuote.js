//명언과 작가 문자열값이 들어간 객체 10개를 저장하는 배열을 만든다.
const quotes = [
  {
    quote: "확실한 일을 실행할 힘은 누구나 가지고 있다.",
    author: "괴테"
  },
  {
    quote: "생각이야말로 진정한 힘이다. 생각은 에너지인 것이다.",
    author: "엔드류 메터스"
  },
  {
    quote: "오늘 할 수 있는 일에 전력을 다하라. 그러면 내일에는 한걸음 더 진보한다.",
    author: "뉴턴"
  },
  {
    quote: "좋은 희망을 품는 것은 바로 그것을 이룰 수 있는 지름길이다.",
    author: "루터"
  },
  {
    quote: "오늘이라는 날은 두 번 다시 오지 않는다는 것을 잊지 말라",
    author: "단테"
  },
  {
    quote: "할 수 있는 한 훌륭한 인생을 만들라. 인생은 짧고 곧 지나간다.",
    author: "오울디즈"
  },
  {
    quote: "열의없이 성취된 위업이란 아직 하나도 없다.",
    author: "애머슨"
  },
  {
    quote: "태만은 천천히 움직이므로 가난이 곧 따라잡는다.",
    author: "프랭클린"
  },
  {
    quote: "내일에 아무런 도움이 되지 않는다면, 당신의 과거는 쫓아버려라",
    author: "오슬러"
  },
  {
    quote: "오늘을 붙들어라! 되도록 내일에 의지하지 말라! 그날 그날이 일 년 중에서 최선의 날이다.",
    author: "에머슨"
  },
];

//html 태그를 가져오는 변수
const quoteContainer = document.getElementById("quoteContainer");
const quoteText = document.getElementById("quote");
const authorText = document.getElementById("author");

const quoteLen = quotes.length;

//랜덤 함수를 이용해 quotes 배열에서 랜덤으로 명언 객체를 하나 뽑아 온다.
const randQuote = quotes[Math.floor(Math.random() * quoteLen)];

//랜덤 명언의 명언(quote)과 작성자(author)를 화면에 표시한다.
quoteText.innerText = randQuote.quote;
authorText.innerText = randQuote.author;
