import React from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default class Workout extends React.Component {

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
    var exc = evt;

    this.setState({
      tempExercise:exc
    })
  }

  durationHandler(evt) {
    var duration = evt;

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
        <View key={i}>
          <Text>{obj.exercise} -- {obj.duration}</Text>
          <Button
            title="Start"
          />
        </View>
      )
    });

    return (
      <View>
        <Text>you need to be healthier. make a workout</Text>
        <View>
          <TextInput
            placeholder="exercise"
            onChangeText={this.exerciseHandler}
          />
          <TextInput
            placeholder="duration"
            onChangeText={this.durationHandler}
          />
        </View>
        <View>
          <Button
            onPress={this.addWorkout}
            title="add workout"
          />
          <Button
            onPress={this.fetch}
            title="use samples"
          />
        </View>
        {workouts}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
