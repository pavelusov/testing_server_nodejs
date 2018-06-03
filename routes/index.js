const NODE_ENV_DEV = process.env.NODE_ENV === 'development';
const express = require('express');
const router = express.Router();

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Combo-box', NODE_ENV_DEV: NODE_ENV_DEV});
});

module.exports = router;
