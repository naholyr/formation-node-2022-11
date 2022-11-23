import jwt from "jsonwebtoken";

const TOKEN_TTL = "24h";
const SECRET = "secret";

export const createToken = (username) =>
  jwt.sign({ username }, SECRET, { expiresIn: TOKEN_TTL });

export const checkToken = (token) => jwt.verify(token, SECRET);
