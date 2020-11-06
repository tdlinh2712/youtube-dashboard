//keys.js -> find what set of keys to return
if (process.env.NODE_ENV === 'production') {
    //return prod set of keys
    module.exports = require('./prod');
} else {
    //return dev key
    module.exports = require('./dev');
}