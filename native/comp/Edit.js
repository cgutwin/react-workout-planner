import React from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default class Edit extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      age:0,
      allowed:null,
      name:""
    }

    this.ageHandler = this.ageHandler.bind(this);
    this.submitInfo = this.submitInfo.bind(this);
    this.nameChangeHandler = this.nameChangeHandler.bind(this);
    this.ageCheck = this.ageCheck.bind(this);
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
      this.submitInfo();
    }
  }

  submitInfo() {
    this.props.setAge(this.state.age);
    this.props.setName(this.state.name);
    this.props.navigation(3);
  }

  nameChangeHandler(evt) {
    var name = evt;

    this.setState({
      name:name
    })
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
        <Text>your current name: {this.props.name}</Text>
        <Text>your current age: {this.props.age}</Text>
        <View>
          <Text>new name</Text>
          <TextInput
            placeholder="name"
            onChangeText={this.nameChangeHandler}
          />
        </View>
        <View>
          <Text>new age</Text>
          <TextInput
            placeholder="name"
            onChangeText={this.ageHandler}
          />
        </View>
        <Button
          onPress={this.ageCheck}
          title="return"
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
