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

router.post('/add', function(req, res, next){
  knex('todo_list').insert(req.body).then(function(){
    res.redirect('/');
  }).catch(function(error){
    console.log(error);
  })
})
router.get('/:id', function(req, res, next){
  knex('todo_list').where({id: req.params.id}).first()
  .then(function(data){
    res.render('detail', {listItem: data})
  })
})

router.get('/:id/edit', function(req, res, next){
  knex('todo_list').where({id: req.params.id}).first()
  .then(function(data){
    res.render('edit', {listItem: data})
  })
})

router.post('/:id/edit', function(req, res, next){
  knex('todo_list').where({id:req.params.id}).update(req.body).then(function(){
      res.redirect('/')
    })
  })

  router.get('/:id/delete', function(req, res, next){
    knex('todo_list').where({id: req.params.id}).del().then(function(){
      res.redirect('/')
    })
  })

module.exports = router;
