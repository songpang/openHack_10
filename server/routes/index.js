var express = require('express');
var router = express.Router()
var db = require('../lib/db');

/* GET home page. */
router.get('/', function(req, res, next) {

    var sql = "SELECT gr_name FROM user_group WHERE id = 'jen';";

    db.query(sql, (err, rows) => {
        res.render('index', {result_list: rows});
    });

});

router.post('/dataSave', function(req, res) {

    var sql = "INSERT INTO user_group VALUES(?, ?)";
    var params = [req.body.id, req.body.groupName];
    db.query(sql, params, (err, rows) => {
    if(err) throw err;
  });
})

module.exports = router;
