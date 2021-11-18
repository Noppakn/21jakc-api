const router = require('express-promise-router')();
const jackController = require('../controllers/jack.controller');

// ==> Definindo as rotas do CRUD - 'Product':

// ==> Rota responsável por criar um novo 'Product': (POST): localhost:3000/api/products
router.post('/jack', jackController.createUser);

module.exports = router;