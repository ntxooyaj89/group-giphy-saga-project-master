const express = require('express');
const router = express.Router();
const axios = require('axios');
const BASE_URL = 'https://api.giphy.com/v1/gifs/search?api_key='//&q=&limit=25&offset=0&rating=G&lang=en';
const API_KEY = process.env.GIPHY_API_KEY;


//Returns an array of objects from giphy that match query term 'q'
router.get('/', (req, res) => {
    const term = req.query.q;
    const myUrl = `${BASE_URL}${API_KEY}&q=${term}&limit=25&offset=0&rating=G&lang=en`;

    console.log(myUrl);
    axios({
        method: 'GET',
        // url: `${BASE_URL}${API_KEY}&q=${term}&limit=25&offset=0&rating=G&lang=en`
        url: myUrl
    }).then((response) => {
        console.log(response.data.data);
        res.send(response.data.data);
    }).catch((error) => {
        res.sendStatus(500);
    });
})

module.exports = router;