const restful = require('node-restful');

const mongoose = restful.mongoose; 

const contatoSchema = new mongoose.Schema({
});

module.exports = restful.model('contato', contatoSchema);