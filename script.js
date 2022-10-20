let quote = document.getElementById("quote");
let author = document.getElementById("name");
let quoteBtn = document.getElementById("newquote");
const url = "https://api.quotable.io/random";

/*quotes generator*/
function getQuote(){
  fetch(url)
    .then((data) => data.json())
    .then((item) => {
      quote.innerText = item.content;
      author.innerText = item.author;
    });};
    
/*quote generator button*/    
quoteBtn.addEventListener("click", getQuote); 
/*other features button*/
let copyBtn = document.getElementById("copy");
let twitterBtn = document.getElementById("twitter");
let speechBtn = document.getElementById("speech");

/*text reader button*/
speechBtn.addEventListener("click", ()=>{
  let utterance = new SpeechSynthesisUtterance(`${quote.innerText} by ${author.innerText}`);
  speechSynthesis.speak(utterance);
  setInterval(()=>{
  !speechSynthesis.speaking ? speechBtn.classList.remove("active") : speechBtn.classList.add("active");},1);});
/*copy quote button*/
copyBtn.addEventListener("click", ()=>{
 navigator.clipboard.writeText(quote.innerText);});
/*twitter button*/
twitterBtn.addEventListener("click", ()=>{
 let tweetUrl = `https://twitter.com/intent/tweet?url=${quote.innerText}`;
 window.open(tweetUrl, "_blank");});

/*dark & white mode*/
const toggleButton = document.querySelector(".dark_mode_btn");
toggleButton.addEventListener("click", () => {
 document.body.classList.toggle("dark-mode");});
