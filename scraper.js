const axios = require('axios');
const cheerio = require('cheerio');
//url space is %20

const url = `https://www.imdb.com/find?&s=tt&ttype=ft&ref_=fn_ft&q=`;

function searchMovies(searchTerm) {
    return axios.get(`${url}${searchTerm}`)
        .then(response => {
            return response.data
        })
        .then(body => {
            const movies = [];
            const $ = cheerio.load(body);
            $('.findResult').each(function (i, element) {
                const $element = $(element);
                const $image = $element.find('td a img')
                const $title = $element.find('td.result_text a')
                const $year = $element.find('td.result_text').contents().filter(function () {
                    return this.nodeType == 3;
                });
                const movie = {
                    title: $title.text(),
                    image: $image.attr('src'),
                    year: $year.text()
                };
                movies.push(movie);
                return movies;

            })
        })
}

module.exports = {
    searchMovies
};