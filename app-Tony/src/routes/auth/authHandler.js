export const authHandler = (req, res) => {
  res.status(501);
  console.log(req.body.username);
  res.send({ error: "Not implemented" });
};
