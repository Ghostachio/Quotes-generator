let authors = document.getElementById('author');
let singleQuote = document.getElementById('quote');
let nextQuote = document.getElementById('new-quote');
let quoteContainer = document.getElementById('quote-container');
let twitterButton = document.getElementById('twitter');
let loader = document.getElementById('loader');


// show loading
const loading = () =>{
    loader.hidden = false;
    quoteContainer.hidden = true;
}
// hide loading
const complete = () =>{
    quoteContainer.hidden = false;
    loader.hidden = true;
}



let apiQuotes = [];
// show new quote
const newQuote = () => {
    // picking Random quote
    const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];
    // replace "null" with "unknown"
    if(!quote.author){
        authors.textContent = "unknow";
    } else {
        authors.textContent = quote.author;
    }
    singleQuote.textContent = quote.text;
    console.log(quote)
}


// get quotes from API
async function getQuotes(){
    const apiUrl = 'https://type.fit/api/quotes';
    try{
        const Response = await fetch(apiUrl);
        apiQuotes = await Response.json()
        newQuote ();
    } catch(error){
        alert(error)
        // catch error
    }
}


const tweet = () =>{
    const twitterUrl = `https://twitter.com/intent/tweet?text=${quote.textContent} - ${authors.textContent}`;
    window.open(twitterUrl, '_blank');
}



nextQuote.addEventListener('click', newQuote);
twitterButton.addEventListener('click', tweet);




// on load 
getQuotes();