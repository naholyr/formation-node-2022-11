import { addUser } from "../../users.js";

export const registerHandler = async (req, res) => {
  const { body } = req;

  try {
    await addUser(body.username, body.password);
    res.status(201).end();
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
};
