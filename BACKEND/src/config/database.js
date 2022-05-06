const mongoose = require("mongoose");

mongoose.Promise = global.Promise;
const senhaMongo = process.env.KEY_DATABASE_MONGO

module.exports = mongoose.connect(senhaMongo);