'use strict';
// Start up DB Server
const { db } = require('./src/auth/models/index.js');
const server = require('./src/server.js');
db.sync()
  .then(() => {
    // Start the web server
    server.startup(process.env.PORT);
  })
  .catch((error) => {
    console.error('Failed to start the server:', error);
  });

// 'use strict';

// // Start up DB Server
// const { db } = require('./src/auth/models/index.js');
// db.sync()
//   .then(() => {

//     // Start the web server
//     require('./src/server.js').start(process.env.PORT);
//   });

