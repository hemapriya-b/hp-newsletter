const { error: sendError } = require("../utils/responseHelper");

async function login(req, res) {
  sendError(res, "Authentication will be enabled in the JWT refactor session.", 501);
}

module.exports = { login };
