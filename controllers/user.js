var User = require('../models/user');
var crypto = require('crypto');


// const createUser = function(username, password) {
//    var user = User.create({username: username, password: createPasswordHashObj(password)});
//    return user;
// };
//
// const createPasswordHashObj = function(password, salt="a") {
//   salt = salt || crypto.randomBytes(Math.ceil(32 * 3 / 4)).toString('base64').slice(0, 8);
//  const hash = crypto.pbkdf2Sync(password, salt, 100, 512, 'sha512');
//  const hashString = hash.toString('base64');
//  // console.log("hashString: ", hashString);
//  return {salt: salt, iterations: 100, hash: hashString};
// };
//
// const login = function(username, password) {
//   return User.findOne({username: username}).then(function(user) {
//     if(!user) {
//       return false;
//     }
//     const pwObject = user.password;
//     const newPWObject = createPasswordHashObj(password, pwObject.salt);
//     return pwObject.hash === newPWObject.hash
//   });
// };
//
// module.exports = {
//   createUser: createUser,
//   createPasswordHashObj: createPasswordHashObj,
//   login: login
// };
