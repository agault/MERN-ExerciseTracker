import React, {Component} from 'react';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";//styling for date picker

export default class CreateExercise extends Component {
    constructor(props) {
      super(props);//ALWAYS START WITH SUPER PROPS CALL
  //in JS class always must call super when using constructor
   
  //WE WANT THE REST OF THE METHODS TO KNOW WHAT "THIS" MEANS:
      this.onChangeUsername = this.onChangeUsername.bind(this);
      this.onChangeDescription = this.onChangeDescription.bind(this);
      this.onChangeDuration = this.onChangeDuration.bind(this);
      this.onChangeDate = this.onChangeDate.bind(this);
      this.onSubmit = this.onSubmit.bind(this);

    //state is how you creat var in react
      this.state = {
        username: '',
        description: '',
        duration: 0,
        date: new Date(),
        users: []//users array. drop dow where select with drop down

      }
      
    }
    componentDidMount() {
      axios.get('http://localhost:5000/users/')
        .then(response => {
          if (response.data.length > 0) {//atleast one user in db
            this.setState({
              users: response.data.map(user => user.username),//data and array, map lets us get the whole array
              username: response.data[0].username//0 index of array
            })
          }
        })
        .catch((error) => {
          console.log(error);
        })
  
    }
    onChangeUsername(e){
        this.setState({
            username: e.target.value//called when username entered, sets the state. target is text box and value of textbox. 
        });
    }
    onChangeDescription(e){
        this.setState({
            description: e.target.value//called when username entered, sets the state. target is text box and value of textbox. 
        });
    }   
     onChangeDuration(e){
        this.setState({
            duration: e.target.value//called when username entered, sets the state. target is text box and value of textbox. 
        });
    }
    onChangeDate(date){
        this.setState({
            date: date//called when username entered, sets the state. target is text box and value of textbox. 
        });
    }
    onSubmit(e) {
      e.preventDefault();
  
      const exercise = {
        username: this.state.username,
        description: this.state.description,
        duration: this.state.duration,
        date: this.state.date
      }
  
      console.log(exercise);
  
      axios.post('http://localhost:5000/exercises/add', exercise)
        .then(res => console.log(res.data));
  
      window.location = '/';
    }

    render() {
        return (
        <div>
          <h3>Create New Exercise Log</h3>
          <form onSubmit={this.onSubmit}>
            <div className="form-group"> 
              <label>Username: </label>
              <select ref="userInput"
                  required
                  className="form-control"
                  value={this.state.username}
                  onChange={this.onChangeUsername}>
                  {
                    this.state.users.map(function(user) {//.map lets us return something for each element in a n array
                      return <option //for each user in array returns 
                        key={user}
                        value={user}>{user}
                        </option>;
                    })
                  }
              </select>
            </div>
            <div className="form-group"> 
              <label>Description: </label>
              <input  type="text"
                  required
                  className="form-control"
                  value={this.state.description}
                  onChange={this.onChangeDescription}
                  />
            </div>
            <div className="form-group">
              <label>Duration (in minutes): </label>
              <input 
                  type="text" 
                  className="form-control"
                  value={this.state.duration}
                  onChange={this.onChangeDuration}
                  />
            </div>
            <div className="form-group">
              <label>Date: </label>
              <div>
                <DatePicker
                  selected={this.state.date}
                  onChange={this.onChangeDate}
                />
              </div>
            </div>
    
            <div className="form-group">
              <input type="submit" value="Create Exercise Log" className="btn btn-primary" />
            </div>
          </form>
        </div>
        )
      }
}

