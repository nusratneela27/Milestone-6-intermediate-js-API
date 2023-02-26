const loadQuote = () => {
    fetch('https://api.kanye.rest/')
    .then(res => res.json())
    .then(data => displayQuote(data))
}

const displayQuote = quote =>{
    const blockquotes = document.getElementById('quote');
    blockquotes.innerHTML = quote.quote 
}

loadQuote();