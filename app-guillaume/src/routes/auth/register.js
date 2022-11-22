export const registerHandler = (req, res) => {
  res.status(501).send(JSON.stringify({ error: "Error Register" }));
};
