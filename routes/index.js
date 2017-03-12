const express = require('express');
const router = express.Router();
const request = require('request');

const API_KEY = process.env.API_KEY
const ROOT_URL=`http://api.crunchbase.com/v/3/odm-organizations?user_key=${API_KEY}`

/* GET home page. */
router.post('/companies/:url', function(req, res, next) {
  const term = req.params.url
  request(`${ROOT_URL}&query=${term}`, function (error, response, body) {
    if (!error && response.statusCode == 200) {
      res.send(body)
    } else {
      res.send('error')
    }
  })
});

module.exports = router;
