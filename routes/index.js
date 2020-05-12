// var express = require('express');
// var router = express.Router();

// /* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });

// module.exports = router;


const article = require('./article');

module.exports = (app) => {
  app.post('/addArticle', article.addArticle);
  app.get('/', (req, res, next) => {
    res.render('index', { title: 'Express' });
  })
}