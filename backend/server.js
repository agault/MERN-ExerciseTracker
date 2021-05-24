//everything required 
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');//help us connect to mongo db 
//envi var in .env file
require('dotenv').config();
//create express server
const app = express();
const port = process.env.PORT || 5000;//port
//cors middle ware, parse JSON
app.use(cors());
app.use(express.json());
//mongoose conecting to mongo db
const uri = process.env.ATLAS_URI;//DB URI- get from mongo db dashboard
mongoose.connect(uri, {useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true});//pass in uri(db stored) start connectiom/ mongo db just puts new update so need to add true 

const connection = mongoose.connection;
connection.once('open', () =>{
    console.log('Mongoose Established Conecction')
})
//MUST REQUIRE FILES THEN USE THEM: 
const exercisesRouter = require('./routes/exercises');
const usersRouter = require('./routes/users');

app.use('/exercises', exercisesRouter);//url user puts in
app.use('/users', usersRouter);

//starts server
app.listen(port, () => {
    console.log('Server is running on port:'+ port)
});
//runs server