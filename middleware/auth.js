// Middeware to protect routes
const jwt = require('jsonwebtoken');
const config = require('config');

module.exports = function(req, res, next) {
  // Get the token from the header
  const token = req.header('x-auth-token');

  // Check if the token doesn't exist
  if (!token) {
    return res.status(401).json({ msg: 'No token, authorization denied' });
  }

  // If there is a token, we need to verify it
  try {
    // Pull out the payload
    const decoded = jwt.verify(token, config.get('jwtSecret'));

    // Pull the user from the decoded token payload,
    // giving us access to the user inside the route
    req.user = decoded.user;
    // Middleware process is complete
    next();
  } catch (err) {
    res.status(401).json({ msg: 'Token is not valid' });
  }
};
