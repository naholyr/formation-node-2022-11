import { MongoClient } from "mongodb";
import { createHash } from "node:crypto";

const client = new MongoClient("mongodb://localhost:27017/chat");

const Users = client.db().collection("users");

export const addUser = async (username, password) => {
  const foundUser = await Users.findOne({ username });
  if (foundUser) {
    // TODO https://www.npmjs.com/package/error
    throw new Error("L'utilisateur existe déjà");
  }

  await Users.insertOne({ username, password: hashPassword(password) });
};

export const checkUser = async (username, password) => {
  const foundUser = await Users.findOne({
    username,
    password: hashPassword(password),
  });

  return foundUser;
};

const hashPassword = (password) => {
  const hash = createHash("sha256");
  hash.update(password);
  return hash.digest("hex");
};
