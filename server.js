const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.json({
        message: 'scraping! yay!'
    })
})






const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log('listening on port', PORT);
})