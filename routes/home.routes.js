const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.render('home');
});

router.post('/film', (req, res) => {
  const title = req.body.title;
  res.redirect(`/film/${encodeURIComponent(title)}`);
});

module.exports = router;
