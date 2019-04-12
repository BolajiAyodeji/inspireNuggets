let request = new XMLHttpRequest();

request.open("GET", "src/quotes.json", true);
request.onload = () => {
    if(request.status>=200 && request.status<400) {
        let data = JSON.parse(request.responseText),
            random = Math.floor(Math.random() * data.length);

        document.getElementById('quote').innerHTML = data[random].quote;
        document.getElementById('author').innerHTML = data[random].author;
    }
};
request.onerror = () => {
    console.log("Something went wrong...")
}
request.send();
