const mongoose = require('mongoose');
const autoIncrement = require('mongoose-auto-increment');
const consola = require('consola');
const CONFIG = require('../app.config.js')

mongoose.Promise = global.Promise;
exports.mongoose = mongoose;

exports.connect = () => {
  mongoose.connect(CONFIG.MONGODB.uri, {
    useCreateIndex: true,
		useNewUrlParser: true,
		promiseLibrary: global.Promise
  });

  // 连接错误
	mongoose.connection.on('error', error => {
		consola.warn('数据库连接失败!', error)
  });
  
  // 连接成功
	mongoose.connection.once('open', () => {
		consola.ready('数据库连接成功!')
	})

  // 自增 ID 初始化
  autoIncrement.initialize(mongoose.connection);
  
  // 返回实例
  return mongoose;
}