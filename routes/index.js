const article = require('./article');

module.exports = (app) => {
  app.post('/addArticle', article.addArticle);
  app.get('/', (req, res, next) => {
    res.render('index', { title: 'Express' });
  })
}