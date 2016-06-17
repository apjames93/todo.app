var express = require('express');
var router = express.Router();
var pg = require('pg');
var knex= require('../db/knex');

/* GET home page. */
router.get('/', function(req, res, next) {
  knex('todo_list').select().then(function(data){
    console.log(data);
    res.render('index', { title: 'todo list' , list: data});
  })
});

router.get('/add', function(req, res, next){
  res.render('add', {title: 'add list item'});
});

module.exports = router;
