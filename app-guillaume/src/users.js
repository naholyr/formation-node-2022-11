import { MongoClient } from "mongodb";
import { createHash } from "node:crypto";

const hashPassword = (password) => {
  const hash = createHash("sha256");
  hash.update(password);
  return hash.digest("hex");
};

const client = new MongoClient("mongodb://localhost:27017/chat");

const Users = client.db().collection("users");

export const addUser = async (username, password) => {
  const foundUser = await Users.findOne({ username });
  if (foundUser) {
    // TODO https://www.npmjs.com/package/error
    throw new Error("User already exist");
  }

  await Users.insert({ username, password: hashPassword(password) });
};

export const checkUser = async (username, password) => {
  const foundUser = await Users.findOne({
    username,
    password: hashPassword(password),
  });

  return foundUser;
};

client.on("open", () => {
  console.log("Connected to MongoDB");
});

await client.connect();
