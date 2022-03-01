const quotes = [
    {
        quote : "성공은 결과가 아니라 과정이다.",
        author : "폴 마이어",
    },
    {
        quote : "성공해서 행복한 것이 아니라 행복해서 성공하는 것이다.",
        author : "A.J 스탠리 부인",
    },
    {
        quote : "가장 높은 곳에 올라가려면 가장 낮은 곳부터 시작하라.",
        author : "푸블릴리우스 시루스",
    },
    {
        quote : "돈과 시간을 잘 관리하라.",
        author : "다케우치 히토시",
    },
    {
        quote : "추구하는 과정을 좋아하라.",
        author : "베스 사위",
    },
    {
        quote : "자신이 하는 일을 좋아하라.",
        author : "앤드류 매티스",
    },
    {
        quote : "일, 사랑, 희망을 가져라.",
        author : "칸트",
    },
    {
        quote : "닫혀진 문을 보지 말고 열려 있는 문을 보라.",
        author : "헬렌 켈러",
    },
    {
        quote : "지금, 여기, 함께 행복하라.",
        author : "로버트 인젤손",
    },
    {
        quote : "행복은 주어지는 것이 아니라 만드는 것이다..",
        author : "양광모",
    },
]

const quote = document.querySelector("#quote span:first-child")
const author = document.querySelector("#quote span:last-child")

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;