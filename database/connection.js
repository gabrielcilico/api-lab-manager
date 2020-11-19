var knex = require('knex')({
    client: 'mysql2',
    connection: {
      host : 'mysql741.umbler.com',
      user : 'gabrielcilico',
      password : 'abcdefg123456',
      database : 'apilabmanager'
    }
  });

module.exports = knex