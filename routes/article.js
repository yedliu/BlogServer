// const Article = require('../model/index.js');
import Article from '../model/index';
import { responseClient } from '../utils/index';
// const { responseClient } = require('../utils/index.js');

exports.addArticle = (req, res) => {
  const { title, describe, createTime, content } = req.body;
  let tempArticle = null;
  tempArticle = new Article({
    title,
    describe,
    content,
    createTime,
  });

  tempArticle.save().then(data => {
    responseClient(res, 200, 0, '保存成功', data);
  }).catch(err => {
    console.log(err);
    responseClient(res);
  })
}