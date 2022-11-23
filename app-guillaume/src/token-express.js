// TODO replace with https://www.npmjs.com/package/express-jwt

import { checkToken } from "../src/routes/auth/token.js";

export const requireAuthentication = (req, res, next) => {
  const onUnauthenticated = (err) => {
    res.status(401).json({ error: err.message });
  };

  const authorizationHeader = req.headers.authorization;
  if (!authorizationHeader) {
    return onUnauthenticated(new Error("No authorization header"));
  }

  if (!authorizationHeader.startsWith("Bearer ")) {
    return onUnauthenticated(new Error("Invalid Authorization header"));
  }

  const token = authorizationHeader.substring(7);

  try {
    const payload = checkToken(token);
    req.auth = payload;
    next();
  } catch (err) {
    return onUnauthenticated(err);
  }
};
