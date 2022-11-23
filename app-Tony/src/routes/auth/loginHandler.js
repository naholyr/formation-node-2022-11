import { createToken } from "../../token.js";
import { checkUser } from "../../users.js";

export const loginHandler = async (req, res) => {
  const { body } = req;

  try {
    const user = await checkUser(body.username, body.password);
    if (!user) {
      res.status(403).send({ error: "Invalid username or password" });
      return;
    }
    const token = createToken(user.username);
    res.send({ token: token, user: user.username });
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
};
