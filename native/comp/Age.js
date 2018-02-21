import React from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default class Age extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      age:0,
      allowed:null
    }

    this.ageHandler = this.ageHandler.bind(this);
    this.ageCheck = this.ageCheck.bind(this);
    this.submitAge = this.submitAge.bind(this);
  }

  ageHandler(evt) {
    var age = evt;

    this.setState({
      age:age
    })
  }

  ageCheck() {
    var age = parseInt(this.state.age);

    console.log(age);

    if (age <= 12) {
      this.setState({
        allowed:false
      })

      console.log("no");
    } else {
      console.log("yes");
      this.submitAge();
    }
  }

  submitAge() {
    this.props.setAge(this.state.age);
    this.props.navigation(3);
  }

  render() {

    var warning = null;

    if (this.state.allowed === false) {
      warning = <Text>this isnt for you</Text>

    } else {
      warning = null;
    }

    return (
      <View>
        <Text>Hi {this.props.name}</Text>
        <Text>whats your age</Text>
        <TextInput
            placeholder="age"
            onChangeText={this.ageHandler}
          />
        <Button
            onPress={this.ageCheck}
            title="ok"
          />
        {warning}
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
