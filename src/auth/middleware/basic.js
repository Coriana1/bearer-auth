'use strict';
const { users } = require('../models/index.js');

module.exports = async (req, res, next) => {
  if (!req.headers.authorization) {
    return _authError();
  }

  const authHeader = req.headers.authorization;
  const encodedCredentials = authHeader.split(' ')[1];
  const decodedCredentials = Buffer.from(encodedCredentials, 'base64').toString();
  const [username, password] = decodedCredentials.split(':');

  try {
    req.user = await users.authenticateBasic(username, password);
    next();
  } catch (e) {
    console.error(e);
    res.status(403).send('Invalid Login');
  }
};



// 'use strict';
// const { decode } = require('base64');
// const { users } = require('../models/index.js');

// module.exports = async (req, res, next) => {

//   if (!req.headers.authorization) { return _authError(); }

//   let basic = req.headers.authorization.split('').pop();
//   let [username, password] = base64.decode(basic).split(':');

//   try {
//     req.user = await users.authenticateBasic(username, password);
//     next();
//   } catch (e) {
//     console.error(e);
//     res.status(403).send('Invalid Login');
//   }
// };









