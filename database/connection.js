const knex = require('knex')({
    client: 'pg',
    connection: {
      host : 'ec2-34-234-185-150.compute-1.amazonaws.com',
      user : 'rnwkjjbbvdtuoe',
      password : 'b5a06c2238574237d1a798630bcc2c5a9bf23c027621445bd1ad722f868b009b',
      database : 'd3ufip6ubi6fnh'
    }
  });

module.exports = knex