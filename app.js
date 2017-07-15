
const mongoose = require('mongoose');
const User = require('./models/user');
const crypto = require('crypto');


mongoose.Promise = require('bluebird');

const env = process.env.NODE_ENV || "development";

const mongoURL = require('./config.json')[env].mongoURL;

mongoose.connect(mongoURL);

const createUser = function(username, password) {
  console.log(username, password);
  return User.create({username: username, password: createPasswordHashObj(password)});
};

const createPasswordHashObj = function(password){
 const hash = crypto.pbkdf2Sync(password, 'asdf', 100, 512, 'sha512');
 const hashString = hash.toString('base64');
 // console.log("hashString: ", hashString);
 return {salt: 'asdf', iterations: 100, hash: hashString};
};

const login = function(username, password) {
  return User.findOne({username: username}).then(function(user) {
    if(!user) {
      return false;
    }
    const pwObject = user.password;
    const newPWObject = createPasswordHashObj(password, pwObject.salt);
    return pwObject.hash === newPWObject.hash
  });
};

module.exports = {
  createUser: createUser,
  createPasswordHashObj: createPasswordHashObj,
  login: login
};
/*
app.listen(3000, function(){
  console.log('app started');
});
*/
