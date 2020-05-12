const { mongoose } = require('../core/mongodb.js');
const autoIncrement = require('mongoose-auto-increment');

const articleSchema = new mongoose.Schema({
  title: { type: String, default: '' },
  describe: { type: String, default: '' },
  createTime: { type: Date, default: Date.now },
  content: { type: String, default: '' },
});

articleSchema.plugin(autoIncrement.plugin, {
  model: 'Article',
	field: 'id',
	startAt: 1,
	incrementBy: 1,
})

module.exports = mongoose.model('Article', articleSchema);