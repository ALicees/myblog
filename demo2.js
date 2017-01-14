// 这里包含一些方法，将这些公共的方法暴露出去。

// function add(a, b) {
//     return a + b;
// }

// function sub(a, b) {
//     return a - b;
// }

// 写法1，懂
// var fun = {
//     a: add,
//     b: sub //可不可以不用sub
// };

// 写法2，这个例子表达了exports和module.exports的关系喔 //什么关系,这两个是同一个
exports.add = function(a, b) {
    return a + b;
}
exports.sub = function(a, b) {
    return a - b;
}

module.exports = exports;