import React from 'react';
import { StyleSheet, Text, View, TextInput, Button, Alert } from 'react-native';

export default class Exercise extends React.Component {

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
    var exercise = evt;

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
      Alert.alert(
            'Alert',
            'no need bruh',
          )
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
        <Text key={i}>{obj}, </Text>
      )
    });

    return (
      <View>
        <View>
          <Button
            onPress={this.edit}
            title="edit info"
          />
        </View>
        <Text>{this.props.name}</Text>
        <Text>you are {this.props.age} years old</Text>
        <Text>what are some exercises you do per week</Text>
        <TextInput
          placeholder="excercise"
          onChangeText={this.exerciseChangeHandler}
        />
        <Button
          onPress={this.addExercises}
          title="Add Exercise"
        />
        <Button
          onPress={this.checkExerciseCount}
          title="Finish"
        />
        {exercises}
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
