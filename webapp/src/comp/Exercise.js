import React, { Component } from 'react';

class Exercise extends Component {

  constructor(props) {
    super(props);

    this.state = {
      exerciseTemp:"",
      exercises:[]
    }

    this.exerciseChangeHandler = this.exerciseChangeHandler.bind(this);
    this.addExercises = this.addExercises.bind(this);
    this.checkExerciseCount = this.checkExerciseCount.bind(this);
    this.edit = this.edit.bind(this);
  }

  exerciseChangeHandler(evt) {
    var exercise = evt.target.value;

    this.setState({
      exerciseTemp:exercise
    })
  }

  addExercises() {
    var currentExercise = this.state.exerciseTemp;

    this.state.exercises.push(currentExercise);

    this.setState({
      exerciseTemp:currentExercise
    });

    console.log(this.state.exercises);
  }

  checkExerciseCount() {
    var exerciseArray = this.state.exercises;

    if (exerciseArray.length >= 5) {
      console.log("yes");
      alert("no need bruh");
    } else {
      this.props.navigation(4);
    }
  }

  edit() {
    this.props.navigation(5);
  }

  render() {

    var exercises = this.state.exercises.map((obj, i) =>{

      return (
        <span key={i}>{obj}, </span>
      )
    });

    return (
      <div>
        <div>
          <button onClick={this.edit}>edit name</button>
        </div>
        <p>{this.props.name}</p>
        <p>you are {this.props.age} yeasrs old</p>
        <p>what are some exercises you do per week</p>
        <input onChange={this.exerciseChangeHandler} type="text" placeholder="exercise"/>
        <button onClick={this.addExercises}>add exercise</button>
        <button onClick={this.checkExerciseCount}>finish</button>
        <br/>
        {exercises}
      </div>
    );
  }
}

export default Exercise;
