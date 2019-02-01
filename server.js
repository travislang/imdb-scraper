const axios = require('axios');
const cheerio = require('cheerio');
//url space is %20

const url = `https://www.imdb.com/find?&s=tt&ttype=ft&ref_=fn_ft&q=`;

function searchMovies(searchTerm) {
    return axios.get(`${url}${searchTerm}`)
    .then( response => {
        return response.data
    })
}

searchMovies('star wars')
    .then(body => {
        const $ = cheerio.load(body);
        $('.findResult').each(function(i, element) {
            const $element = $(element);
            console.log($element.text());
            
        })
    })