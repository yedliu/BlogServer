const Model = require('../model');

const { Article } = Model;

const articleController = {
  all(req, res) {
    console.log('res', res);
    Article.find({}).exec((err, articles) => res.json(articles))
  },
  byId(req, res) {
    const idParams = req.params.id;
    Article.findOne({ _id: idParams }).exec((err, articles) => res.json(articles))
  },
  create(req, res) {
    const requestBody = req.body;
    const newArticle = new Article(requestBody);
    newArticle.save((err, saved) => {
      Article.findOne({ _id: newArticle._id }).exec((err, articles) => res.json(articles))
    })
  },
  remove(req, res) {
    const idParams = req.params.id;
    Article.findOne({ _id: idParams }).remove((err, removed) => res.json(idParams))
  }
}

module.exports = articleController;