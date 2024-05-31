const quotesRandomAPI_url = 'https://api.quotable.io/random'

const quote = document.getElementById('quote')
const author = document.getElementById('author')

const getRandomQuote = async (url) => {
    const response = await fetch (url)
    const data = await response.json()
    quote.innerHTML = data.content
    author.innerHTML = data.author
}

getRandomQuote(quotesRandomAPI_url)

const newQuoteBtn = () => {
    getRandomQuote(quotesRandomAPI_url)
}
