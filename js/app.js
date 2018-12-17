var random = Math.floor(Math.random() * data.length);
document.getElementById('quote').innerHTML = data[random].quote;
document.getElementById('author').innerHTML = data[random].author;
console.log(data[random].quote);
console.log(data[random].author);