function requireAdmin(req, res, next) {
  // JWT verification will be enabled in the auth session.
  next();
}

module.exports = { requireAdmin };
