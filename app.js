
var mongoose = require('mongoose');
var User = require('./models/users');
var Cards = require('./models/cards');
var crypto = require('crypto');
var routes = require('./routes');
var bodyParser = require('body-parser');
var mustacheExpress = require('mustache-express');
var expressValidator = require('express-validator');
var parseurl = require('parseurl');
var express = require('express');
var session = require('express-session');
var path = require('path');

var app = express();

var nodeEnv = process.env.NODE_ENV || "development";

var config = require('./config.json')[nodeEnv];
mongoose.Promise = require('bluebird');
mongoose.connect(config.mongoURL);

app.engine('mustache', mustacheExpress());
app.set('view engine', 'mustache');
app.set('views', path.join(__dirname, 'views'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(expressValidator());
app.use('/static', express.static(path.join(__dirname, 'public')));
app.use(session({
  secret: 'keyboard cats',
  resave: false,
  saveUninitialized: true
}));

// //----------------FLIPCARD FUNCTIONS-----------\\
// var createCard = function(username, question) {
// return Cards.create({username: username, question: question});
// };
//
// var updateCard = function(username, question, answer) {
//   Cards.find({username: username})
//    .where({question: question})
//     .then(function(result) {
//     console.log("HERE", result);
//   });
// };
//
// // var reply = {
// //     message: req.body.reply,
// //     userFrom: req.user._id
// // };
// //
// // Message.findOneAndUpdate(
// //     req.params.id,
// //     { $push: { replies: reply } },
// //     { upsert: true }, // upsert looks to find a Message with that id and if it doesn't exist creates the Message
// //     function(err, data) {
// //         // Handle err
// // });

// --------------USER FUNCTIONS----------------\\
// var createUser = function(username, password) {
//    return User.create({username: username, password: createPasswordHashObj(password)});
// };
//
// var createPasswordHashObj = function(password, salt="a") {
//   salt = salt || crypto.randomBytes(Math.ceil(32 * 3 / 4)).toString('base64').slice(0, 8);
//  var hash = crypto.pbkdf2Sync(password, salt, 100, 512, 'sha512');
//  var hashString = hash.toString('base64');
//  // console.log("hashString: ", hashString);
//  return {salt: salt, iterations: 100, hash: hashString};
// };
//
// var login = function(username, password) {
//   return User.findOne({username: username}).then(function(user) {
//     if(!user) {
//       return false;
//     }
//     var pwObject = user.password;
//     var newPWObject = createPasswordHashObj(password, pwObject.salt);
//     return pwObject.hash === newPWObject.hash;
//   });
// };
//
// module.exports = {
//   createUser: createUser,
//   createPasswordHashObj: createPasswordHashObj,
//   login: login,
//   createCard: createCard,
//   updateCard: updateCard
// };
routes(app);


// if (require.main === "module") {
app.listen(3000, function(){
  console.log('I\'m listening');
});
// }

module.exports = app;
