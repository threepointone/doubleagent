
module.exports = (typeof window !== 'undefined') ? require('superagent-browserify') : require('superagent-browserify/node_modules/superagent' + '');