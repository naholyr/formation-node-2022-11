export const checkHandler = (req, res) => {
  res.send({ username: req.auth.username });
};
