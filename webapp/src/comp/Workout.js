import React, { Component } from 'react';

class Workout extends Component {

  constructor(props) {
    super(props);

    this.state = {
      workouts:[],
      tempExercise:"",
      tempDuration:"",
      workout:"",
      duration:""
    }

    this.exerciseHandler = this.exerciseHandler.bind(this);
    this.durationHandler = this.durationHandler.bind(this);
    this.addWorkout = this.addWorkout.bind(this);
    this.fetch = this.fetch.bind(this);
  }

  exerciseHandler(evt) {
    var exc = evt.target.value;

    this.setState({
      tempExercise:exc
    })
  }

  durationHandler(evt) {
    var duration = evt.target.value;

    this.setState({
      tempDuration:duration
    })
  }

  addWorkout() {
    var workout = {
      exercise:this.state.tempExercise,
      duration:this.state.tempDuration
    }

    this.state.workouts.push(workout);
    console.log(this.state.workouts)

    //the array wouldnt map until a change of an input variable, seems odd, this forces it.
    this.setState({
      tempDuration:this.state.tempDuration
    });
  }

  fetch() {
    fetch("http://www.bcitdigitalarts.ca/vote/sample.php").then((resp)=>{
      console.log(resp);

      return resp.json();
    }).then((json)=>{
      console.log(json);

      for (var i = 0; i<json.length; i++) {
        this.state.workouts.push(json[i]);
      }

      console.log(this.state.workouts);

      //forcing again...
      this.setState({
        tempDuration:this.state.tempDuration
      });
    });
  }

  render() {

    var workouts = this.state.workouts.map((obj, i) =>{

      return (
        <div key={i}>
          <span>{obj.exercise} -- {obj.duration}</span>
          <button>start</button>
        </div>
      )
    });

    return (
      <div>
        <p>you need to be healthier. make a workout</p>
        <div>
          <input onChange={this.exerciseHandler} type="text" placeholder="exercise"/>
          <br/>
          <input onChange={this.durationHandler} type="text" placeholder="duration"/>
        </div>
        <div>
          <button onClick={this.addWorkout}>add workout</button>
          <button onClick={this.fetch}>use samples</button>
        </div>
        {workouts}
      </div>
    );
  }
}

export default Workout;
