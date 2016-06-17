
exports.seed = function(knex, Promise) {
  return knex('todo_list').del()
    .then(function(){
      return Promise.all([
            knex('todo_list').insert({
              list_item: 'wipe booty hole '
            }),
            knex('todo_list').insert({
              list_item: 'clean booty hole '
            }),
            knex('todo_list').insert({
              list_item: 'bleach booty hole '
            }),
      ]);
    })
};
