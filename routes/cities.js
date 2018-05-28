var express = require('express');
var router = express.Router();
var redis = require('redis');

var client = redis.createClient({
    host: 'redis'
});
client.on('connect', function () {
    console.log("Connected to Redis...");
});

/* POST users listing. */
router.post('/', function(req, res, next) {
  var id = req.body.id;

  client.hgetall("city0000" + id, function (err, obj) {
      res.send(obj);
  });
});

module.exports = router;
