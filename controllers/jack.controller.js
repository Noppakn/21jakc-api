const db = require("../config/database");

// ==> Método responsável por criar um novo 'Product':

exports.createUser = async (req, res) => {
 // const { username, password } = req.body;
 
  // const { rows } = await db.query(
  //   "INSERT INTO Account (username, password) VALUES ($1, $2)",
  //   [req.body.username, req.body.password]
  // );

  res.status(201).send({
    message: "user added successfully!",
    body: {
      product: { username, password }
    },
  });
};