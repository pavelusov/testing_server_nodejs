var express = require('express');
var router = express.Router();

/* GET users listing. */
router.post('/', function(req, res, next) {
  var id = req.body.id;
  res.send('respond with a resource');
});

module.exports = router;
