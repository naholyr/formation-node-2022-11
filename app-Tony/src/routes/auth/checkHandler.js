export const checkHandler = (req, res) => {
  // Si j'arrive ici c'est que le token a bien été validé
  // => j'ai req.auth = le payload = { username... }
  res.send({ username: req.auth.username });
};
