const express = require('express');
const http = require('http');
const router = express.Router();

router.get('/film/:title', (req, res) => {
  const title = req.params.title;
  const apiUrl = `http://www.omdbapi.com/?t=${title}&apikey=${process.env.OMDB_API_KEY}`;

  http.get(apiUrl, (apiRes) => {
    let data = '';
    apiRes.on('data', chunk => {
      data += chunk;
    });
    apiRes.on('end', () => {
      const movie = JSON.parse(data);
      res.render('film', { movie });
    });
  }).on('error', (e) => {
    res.send('Error fetching movie details');
  });
});

module.exports = router;
