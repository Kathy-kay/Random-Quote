const quoteText = document.querySelector(".quote");
const quoteBtn = document.querySelector("button");
const authorName = document.querySelector(".name");
const soundBtn = document.querySelector(".sound");
const copyBtn = document.querySelector(".copy");
const twitterBtn = document.querySelector(".twitter");

quoteBtn.addEventListener("click", () => {
  quoteBtn.classList.add("loading");
  quoteBtn.innerText = "Loading Quote...";
  //fetch random quote/date from API and parsing it into JSON
  fetch("https://api.quotable.io/random")
    .then((res) => res.json())
    .then((result) => {
      quoteText.innerText = result.content;
      authorName.innerText = result.author;
      quoteBtn.innerText = "New Quote";
      quoteBtn.classList.remove("loading");
    });
});

soundBtn.addEventListener("click", () => {
  //the speechsynthesisutterance is a web search api that represent a speech request
  let utterance = new SpeechSynthesisUtterance(
    `${quoteText.innerText} by ${authorName.innerText}`
  );
  //speak method of speechsynthesis speaks the utterance
  speechSynthesis.speak(utterance);
});

copyBtn.addEventListener("click", () => {
  //copying quoteText to on copyBtn  click
  navigator.clipboard.writeText(quoteText.innerText);
});

twitterBtn.addEventListener("click", () => {
  let tweetUrl = `https://twitter.com/intent/tweet?url=${quoteText.innerText}`;
  window.open(tweetUrl, "_blank");
});

/*const quotes = [
    "The greatest glory in living lies not in never falling, but in rising every time we fall.",
    "Your time is limited, so don't waste it living someone else's life. Don't be trapped ",
    "If you look at what you have in life, you'll always have more. If you look at what you don't have in life, you'll never have enough.",
    "If you set your goals ridiculously high and it's a failure, you will fail above everyone else's success.",
    "Always remember that you are absolutely unique. Just like everyone else. ",
    "The best and most beautiful things in the world cannot be seen or even touched — they must be felt with the heart.",
    "You will face many defeats in life, but never let yourself be defeated"
  ]
  
  const word = document.getElementById("demo");
  const button = document.querySelector(".btn");
  
  button.addEventListener('click', () => {
    const randomQuote = Math.floor(Math.random() * quotes.length);
    word.innerText = quotes[randomQuote];
  })*/
