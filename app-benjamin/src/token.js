import jwt from "jsonwebtoken";

const TOKEN_TTL = "14h";
const SECRET = "token";

export const createToken = (username) => {
  return jwt.sign({ username }, SECRET, { expiresIn: TOKEN_TTL });
};

export const checkToken = (token) => {
  return jwt.verify(token, SECRET);
};
