import jwt from "jsonwebtoken";

const TOKEN_TTL = process.env.TOKEN_TTL;
const SECRET = process.env.TOKEN_SECRET;

export const createToken = (username) => {
  return jwt.sign({ username }, SECRET, { expiresIn: TOKEN_TTL });
};

export const checkToken = (token) => {
  return jwt.verify(token, SECRET);
};
