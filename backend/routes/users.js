const router = require('express').Router();//need express router bec creating rout
let User = require('../models/user.model');//mongoose model
//First Route that handles incoming reqests (http GET) on route path
router.route('/').get((req, res) =>{
    User.find()//mongoose method. get list of all users. returns a promise in json format
        .then(users => res.json(users))//one found returns something in json format
        .catch(err => res.status(400).json('Error Will Robinson ' + err));//error. return status 400 and messsage
});
// sencond endpoint handles incoming HTTP POST reqests
//ADD:
router.route('/add').post((req, res) =>{//post req handles add
    const username = req.body.username;//username var

    const newUser = new User({username: username});//create new instance of user using username

    newUser.save()// new user saved to db
        .then(() => res.json('User Has Been Added'))//sucsess msg
        .catch(err => res.status(400).json('Error' + err));
});




module.exports = router;//ROUTER FILES STANDARD, export router