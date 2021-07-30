const twitterBtn = document.getElementById('twitter');
const authorText = document.getElementById('author');
const quoteText = document.getElementById('quote');

const tweetQuote = () => {
  const quote = quoteText.innerText;
  const author = authorText.innerText;
  const twitterUrl = `https://twitter.com/intent/tweet?text=${quote} - ${author}`;
  window.open(twitterUrl, '_blank');
  // console.log('clicked!!!');
  // console.log(authorText, quoteText);
};

twitterBtn.addEventListener('click', tweetQuote);
