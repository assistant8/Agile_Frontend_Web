const quotes = [
  {
    quote: "나는 프론트 엔드 개발자야.",
    author: "의성1",
  },
  {
    quote: "나는 백 엔드 개발자야. ",
    author: "의성2",
  },
  {
    quote: "나는 풀스택 개발자야.",
    author: "의성3",
  },
  {
    quote: "나는 의성이야.",
    author: "의성4",
  },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");
const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
