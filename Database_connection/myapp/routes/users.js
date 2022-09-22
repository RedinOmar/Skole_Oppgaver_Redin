var express = require('express');
var router = express.Router();
var db=require('../database');
// another routes also appear here
// this script to fetch data from MySQL databse table
router.get('/elev', function(req, res, next) {
    var sql='SELECT * FROM elev';
    db.query(sql, function (err, data, fields) {
    if (err) throw err;
    res.render('elev', { title: 'elever', elevData: data});
  });
});
module.exports = router;
