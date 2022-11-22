export const loginHandler = async (req, res) => {
  const { body } = req;

  try {
    const user = await checkUser(body.username, body.password);
    if (!user) {
      res.status(403).send({ error: "Invalid username or password" });
      return;
    }
    res.send({ token: undefined, user });
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
};
