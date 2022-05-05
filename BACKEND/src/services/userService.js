const errorHandler = require("../common/errorHandler");
const User = require("../models/users/user");
const hashPassword = require("../common/hashPassword");

User.methods(["post"]);

User.updateOptions({new: true, runValidators: true})

User.before("post", hashPassword).after("post", errorHandler)


module.exports = User;