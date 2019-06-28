var express = require('express');
var router = express.Router()
var db = require('../lib/db');

router.get('/login', function (req, res) {

})

/* GET home page. */
router.get('/', function(req, res, next) {

    var sql = "SELECT gr_name FROM user_group WHERE id = 'jen';";

    db.query(sql, (err, rows) => {
        res.render('index', {result_list: rows});
    });

});

router.post('/', function (req, res, next) {

    var sql = "SELECT gr_name, color, gr_number FROM user_group WHERE id = ?;";
    var params = [req.body.id];

    db.query(sql, params,(err, rows) => {
        res.send(rows);
    })
})

router.post('/dataSave', function(req, res) {

    var sql = "INSERT INTO user_group(id, gr_name, color) VALUES(?, ?, ?)";
    var params = [req.body.id, req.body.groupName, req.body.color];
    db.query(sql, params, (err, rows) => {
    if(err) throw err;
  });
})

router.post('/initial', function (req, res) {

    var user_id = req.body.id;
    var sql = 'SELECT schedule_id as "id", gr_number as "calendarId", title, category, start_date as "start", end_date as "end" FROM schedule WHERE user_id = ' + "'" + user_id + "'" + ';';

    db.query(sql, (err, rows) => {
        if(err) throw err;
        else
        {
            res.send(rows);
        }
    })

})

router.post('/update', function (req, res) {

    const {calendarId, id, title, start, end} = req.body;

    var sql = 'UPDATE schedule SET gr_number = ?, title = ?, start_date = ?, end_date = ? WHERE schedule_id = ?;';
    var params = [calendarId, title, start, end, id];

    db.query(sql, params, (err, rows, fields) =>
    {
        if(err) throw err;
        else
        {
            res.send();
        }
    })
})

router.post('/delete', function (req, res) {

    const id = req.body.id;

    var sql = 'DELETE FROM schedule WHERE schedule_id = ?';
    var params = [id];

    db.query(sql, params, (err, rows, fields) => {
        if(err) throw err;
        else
        {
            res.send();
        }
    })

})

router.post('/insert', function(req, res){

    const{calendarId, id, title, isAllDay, start, end, category} = req.body;

    var sql = 'INSERT INTO schedule(title, user_id, start_date, gr_number, end_date, category) VALUES(?, ?, ?, ? ,? ,?);';
    var params = [title, 'hacker10', start, calendarId, end, category];

    db.query(sql, params, (err, rows, fields) => {
        if(err) throw err;
        else
        {
            res.send();
        }
    })
})

module.exports = router;
