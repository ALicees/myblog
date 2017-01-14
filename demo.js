// 我从这里获取到config中的信息
// 所以可以不使用config-lite这玩意儿

var config = require('./config');

console.log('数据库名：' + config.name);

//在这里调用demo2.js
var dome = require('./demo2');
console.log('最后是' + dome.add(1, 3));