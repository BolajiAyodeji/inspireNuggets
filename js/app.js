console.log(data);
var random = Math.floor(Math.random() * 40);
document.getElementById('quote').innerHTML = data[random].quote;
document.getElementById('author').innerHTML = data[random].author;