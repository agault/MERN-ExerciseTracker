const router = require('express').Router();//need express router bec creating rout
let Exercise = require('../models/exercise.model');//mongoose model
//First Route that handles incoming reqests (http GET) on route path
//LIST:
router.route('/').get((req, res) =>{
    Exercise.find()//mongoose method. get list of all exercises. returns a promise in json format
        .then(exercises => res.json(exercises))//one found returns something in json format
        .catch(err => res.status(400).json('Error Will Robinson ' + err));//error. return status 400 and messsage
});
// sencond endpoint handles incoming HTTP POST reqests
//ADD:
router.route('/add').post((req, res) =>{//post req handles add
    const username = req.body.username;//userename var
    const description = req.body.description;
    const duration = Number(req.body.duration);
    const date = Date.parse(req.body.date);//convert date

    const newExercise = new Exercise({// new ex with these varibales
        username,
        description,
        duration, 
        date,
    
    });//create new instance of exercise using username

    newExercise.save()// new exercise saved to db
        .then(() => res.json('Exercise Has Been Added'))//sucsess msg
        .catch(err => res.status(400).json('Error' + err));
});
//GET EXCERSIZE BY ID
router.route('/:id').get((req, res) =>{//  /:id a variable, object id created auto by mongo 
    Exercise.findById(req.params.id)//Get id from url by url
        .then(exercise => res.json(exercise))//return as json
        .catch(err => res.status(400).json('Error'+ err))
})
//DELETE
router.route('/:id').delete((req, res) =>{//pass obj id with delete
    Exercise.findByIdAndDelete(req.params.id)//get from url
        .then(() => res.json('Exercise has been deleted'))
        .catch(err => res.status(400).json('Error'+ err))
});
//UPDATE
router.route('/update/:id').post((req, res) => {
    Exercise.findById(req.params.id)//FIND CURRENt X, pass in id from url
    .then(exercise => {
        exercise.username = req.body.username;//the route needs a json obj with all 4 varibles
        exercise.description = req.body.description;//assign to feild that exsists
        exercise.duration = Number(req.body.duration);
        exercise.date = Date.parse(req.body.date);

        exercise.save()
        .then(() => res.json('Exercise has been Updated!'))
        .catch(err => res.status(400).json('Error' + err));

    })
    .catch(err => res.status(400).json('Error' + err))
});

module.exports = router;//ROUTER FILES STANDARD, export router