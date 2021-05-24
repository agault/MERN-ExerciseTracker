import React from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";//Route url to diff components


import NavBar from './components/navbar.component';
import ExercisesList from './components/exercises-list.component';
import EditExercise from './components/edit-exercise.component';
import CreateExercise from './components/create-exercise.component';
import CreateUser from './components/create-user.component';

//help map diff paths:
function App() {
  return (
 
    <Router>
      <div className="container">
        <NavBar/>
        <br />
    
        <Route path="/" exact component = {ExercisesList}/>/ 
        <Route path="/edit/:id" component = {EditExercise}/>
        <Route path="/create" component = {CreateExercise}/>
        <Route path="/user" component = {CreateUser}/>
        </div>
    </Router>
  );
}

export default App;

//